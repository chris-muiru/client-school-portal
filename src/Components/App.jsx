import VerificationPage from "./LogIn/VerificationPage"
import { BrowserRouter, Route } from "react-router-dom"
import Main from "./Main"
import AuthProvider from "../Context/AuthContext"
import PrivateRoute from "../utils/PrivateRoute"

const App = () => {
	return (
		<div>
			<AuthProvider>
				<BrowserRouter>
					<PrivateRoute path="/dash">
						<Main />
					</PrivateRoute>
					<Route path="/login">
						<VerificationPage />
					</Route>
				</BrowserRouter>
			</AuthProvider>
		</div>
	)
}

export default App
