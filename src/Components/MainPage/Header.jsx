import "../css/MainPage/header.css";
import LogOut from "../LogOut/LogOut";

import Menubar from "./Menubar";
const Header = () => {
	return (
		<div className="div-header">
			<Menubar />
			Student portal
			<LogOut />
		</div>
	);
};
export default Header;
