import { FaLock } from "react-icons/fa";
import "../css/LogOut/logout.css";
import { useAuthContext } from "../../Context/AuthContext";
const LogOut = () => {
	const { logOutUser } = useAuthContext();
	return (
		<div className="logo">
			<FaLock
				onClick={() => {
					logOutUser();
				}}
			/>
		</div>
	);
};

export default LogOut;
