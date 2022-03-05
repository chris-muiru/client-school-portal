import Login from "./Login";
import Picture from "./Picture";
import Heading from "./Heading";
import '../css/LogIn/verificationpage.css';
import AuthProvider from "../../Context/AuthContext";
const VerificationPage=()=>{
    return(
        <div className="verification">
            <Heading/>
            <Picture/>
            <AuthProvider>
                <Login/>
            </AuthProvider>
        </div>
    )
}

export default VerificationPage;