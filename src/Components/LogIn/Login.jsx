import { useAuthContext } from '../../Context/AuthContext';
import '../css/LogIn/login.css'
import Forgot from "./Forgot";
const Login=()=>{
    let {loginUser} = useAuthContext()
    return(
        <div className="div-login">
            <h2 className="heading">Log in</h2>
            <div className="login">
                <form onSubmit={loginUser}>
                    <input type="text" placeholder="username" name="username" className="input" />  
                    <input type="password" placeholder="password" name="password"  className="input" />    
                    <button type="submit" id="btn-submit">Log in</button>
                    <Forgot/>
                </form> 
            </div> 
        </div>
    )
}

export default Login;


