import Login from "./Login"
import Picture from "./Picture"
import Heading from "./Heading"
import "../css/LogIn/verificationpage.css"
import AuthProvider from "../../Context/AuthContext"
import Forgot from "./Forgot"
const VerificationPage = () => {
	return (
		<div className="verification">
			<div className="wrapper-verfication">
				<Heading />
				<Picture />
				<AuthProvider>
					<Login />
				</AuthProvider>
			</div>
		</div>
	)
}

export default VerificationPage
