import { useState } from "react";
import "../css/Results/studentresult.css";
import { useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext";

import Trow from "./Trow";
const StudentResult = () => {
	const [result, setResult] = useState({});

	const { getAuthToken } = useAuthContext();

	const RESULT_URL = "http://localhost:8000/results/";
	const getResult = async () => {
		let response = await fetch(RESULT_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		});
		let data = await response.json();
		console.log(data);
		setResult(data);
	};
	useEffect(() => {
		getResult();
	}, []);

	console.log(result);
	// set the rows here
	let rows = [];
	for (let i = 0; i < result.length; i++) {
		rows.push(
			<Trow
				unit_name={result[i]["unit_name"]}
				unit_code={result[i]["unit_code"]}
				marks={result[i]["marks"]}
				grade={result[i]["grade"]}
				year={result[i]["year"]}
			/>
		);
	}
	return (
		<div>
			<div className="div-result">
				<div className="semister">
					<h3 className="h3-heading">Semister: </h3>
					<table>
						<thead>
							<tr>
								<td>
									<h3>unit name</h3>
								</td>
								<td>
									<h3>unit code</h3>
								</td>
								<td>
									<h3>marks</h3>
								</td>
								<td>
									<h3>grade</h3>
								</td>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
export default StudentResult;
