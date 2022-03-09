import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
const PrivateRoute = ({ children, ...rest }) => {
	let { user } = useAuthContext();
	return (
		<Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>
	);
};

export default PrivateRoute;
