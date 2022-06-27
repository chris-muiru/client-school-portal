import VerificationPage from "./LogIn/VerificationPage"
import { BrowserRouter, Route } from "react-router-dom"
import Main from "./Main"
import AuthProvider from "../Context/AuthContext"
import PrivateRoute from "../utils/PrivateRoute"
import "./css/app.css"
const App = () => {
	return (
		<div className="main-div">
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
