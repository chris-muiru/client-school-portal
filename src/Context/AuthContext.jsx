import { createContext, useContext, useEffect, useState } from "react"
import jwtDecode from "jwt-decode"
const AuthContext = createContext()

export function useAuthContext() {
	// custom hook
	return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() =>
		localStorage.getItem("authTokens")
			? jwtDecode(localStorage.getItem("authTokens"))
			: null
	)
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	)

	let loginUser = async (e) => {
		const GET_TOKEN = "http://localhost:8000/api/token/"
		e.preventDefault()
		let response = await fetch(GET_TOKEN, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		})
		let data = await response.json()
		console.log(` ----- ${data} is the data`)
		// jwt decode to decode user data
		if (response.status === 200) {
			setAuthTokens(data)
			setUser(jwtDecode(data.access))
			localStorage.setItem("authTokens", JSON.stringify(data))

			console.log(`1. ${authTokens}`)

			window.location = "/dash"
		} else {
			alert("something went wrong")
		}
	}

	let logOutUser = () => {
		setAuthTokens(null)
		setUser(null)
		localStorage.removeItem("authTokens")

		window.location = "/login"
	}

	let updateTokens = async () => {
		const REFRESH_TOKEN = "http://localhost:8000/api/token/refresh/"
		console.log(authTokens.refresh)
		let response = await fetch(REFRESH_TOKEN, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh: authTokens.refresh }),
		})
		let data = await response.json()

		if (response.status === 200) {
			setAuthTokens(data)
			setUser(jwtDecode(data.access))
			localStorage.setItem("authTokens", JSON.stringify(data))
		} else {
			logOutUser()
			window.location = "login"
		}
	}

	const getAuthToken = () => {
		if (jwtDecode(authTokens.access).exp < Date.now() / 1000) {
			localStorage.clear()
			window.location = "/auth"
		}
		return authTokens.access
	}

	let contextData = {
		user: user,
		loginUser: loginUser,
		logOutUser: logOutUser,
		getAuthToken: getAuthToken,
	}

	useEffect(() => {
		console.log("update token called")
		let interval = setInterval(() => {
			if (authTokens) {
				updateTokens()
			}
		}, 240000)

		// cleanup
		return () => {
			clearInterval(interval)
		}
	}, [authTokens])
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
