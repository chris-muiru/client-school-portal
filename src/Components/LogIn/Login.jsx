import { useAuthContext } from '../../Context/AuthContext';
import '../css/LogIn/login.css'
import Forgot from "./Forgot";
const Login=()=>{
    let {loginUser} = useAuthContext()
    return(
        <div className="div-login">
            <h2 className="heading">Log in</h2>
                <form onSubmit={loginUser} className="login">
                    <input type="text" placeholder="Username" name="username" className="input" /> 
                    <input type="password" placeholder="Password" name="password"  className="input" />    
                    <button type="submit" id="btn-submit">Log in</button>
                    {/* <Forgot/> */}
                </form>
                <Forgot/> 
        </div>
    )
}

export default Login;


