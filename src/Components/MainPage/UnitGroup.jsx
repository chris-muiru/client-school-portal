import Unit from "./Unit";
import "../css/MainPage/unitgroup.css";
import StudentInfo from "./StudentInfo";
import Fee from "./Fee";
import StudentPic from "./StudentPic";
import Header from "./Header";
import { useAuthContext } from "../../Context/AuthContext";
import { useEffect, useState } from "react";

const UnitGroup = () => {
	const [count, setCount] = useState({});
	const { getAuthToken } = useAuthContext();
	const fetchUnitCount = async () => {
		const UNIT_COUNT_URL = "http://localhost:8000/unitsDetail/";
		let response = await fetch(UNIT_COUNT_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		});

		const data = await response.json();
		setCount(data);
	};

	useEffect(() => {
		fetchUnitCount();
	}, []);

	const { total_units, booked_units, remaining_units } = count;

	return (
		<div className="div-unitgroup">
			<Header />
			<StudentPic />
			<h3 className="h2-units">Units Info</h3>
			<Unit unitDetail="units done:">{total_units}</Unit>
			<Unit unitDetail="selected units:">{booked_units}</Unit>
			<Unit unitDetail="remaining units:">{remaining_units}</Unit>
			<StudentInfo />

			<Fee />
		</div>
	);
};

export default UnitGroup;
