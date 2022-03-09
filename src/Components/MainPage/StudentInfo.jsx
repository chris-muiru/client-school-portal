import "../css/MainPage/studentinfo.css";
import { useAuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

const StudentInfo = () => {
	const [studentData, setStudentData] = useState({});
	let { getAuthToken } = useAuthContext();

	let fetchUserInfo = async () => {
		const USER_INFO_URL = "http://localhost:8000/student-detail/";

		let response = await fetch(USER_INFO_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			// body:JSON.stringif)
		});
		let data = await response.json();
		setStudentData(data);
	};

	useEffect(() => {
		fetchUserInfo();
	}, []);
	console.log(studentData);
	return (
		<div className="div-studentinfo">
			<h3 className="heading-studentinfo">Student data</h3>
			<table>
				<tbody>
					<tr>
						<td>school id</td>
						<td>{studentData.school_id}</td>
					</tr>
					<tr>
						<td>sex</td>
						<td>{studentData.gender}</td>
					</tr>
					<tr>
						<td>country</td>
						<td>{studentData.country}</td>
					</tr>
					<tr>
						<td>city</td>
						<td>{studentData.city}</td>
					</tr>
					<tr>
						<td>phone</td>
						<td>{studentData.phone}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>{studentData.school_email}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default StudentInfo;
