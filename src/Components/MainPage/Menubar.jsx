import "../css/MainPage/menubar.css";
import { useState } from "react";
import { FaBars, FaBook, FaRobot, FaRocket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Menubar = () => {
	const [count, setCount] = useState(0);

	const style_func = (count) => {
		let style = {};
		if (count === 1) {
			style = { display: "block" };
		} else {
			style = { display: "none" };
		}
		return style;
	};
	const togglebar = () => {
		if (count === 1) {
			setCount(count - 1);
		} else {
			setCount(count + 1);
		}
	};
	return (
		<div
			className="div-menubar"
			onClick={() => {
				togglebar();
			}}
		>
			<FaBars />
			<div className="menu-content" style={style_func(count)}>
				<p>
					<NavLink to="/dash/result" id="link">
						<FaBook className="fonta" />
						Results
					</NavLink>
				</p>
				<p>
					<NavLink to="/dash" id="link">
						<FaRobot className="fonta" />
						Main
					</NavLink>
				</p>
				<p>
					<NavLink to="/dash/book-unit" id="link">
						<FaRocket className="fonta" />
						Book Unit
					</NavLink>
				</p>
			</div>
		</div>
	);
};
export default Menubar;
