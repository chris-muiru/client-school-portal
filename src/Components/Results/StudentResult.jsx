import { useState } from "react"
import "../css/Results/studentresult.css"
import { useEffect } from "react"
import { useAuthContext } from "../../Context/AuthContext"

import Trow from "./Trow"
const StudentResult = () => {
	const [result, setResult] = useState({})

	const { getAuthToken } = useAuthContext()

	const RESULT_URL = "http://localhost:8000/results/"
	const getResult = async () => {
		let response = await fetch(RESULT_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		let data = await response.json()
		setResult(data)
	}
	useEffect(() => {
		getResult()
	}, [])

	// set the rows here
	let rows = []
	for (let i = 0; i < result.length; i++) {
		rows.push(
			<Trow
				unit_name={result[i]["unit_name"]}
				unit_code={result[i]["unit_code"]}
				marks={result[i]["marks"]}
				grade={result[i]["grade"]}
			/>
		)
	}
	return (
		<div>
			<div className="div-result">
					<h3 className="semister-heading">Semister: </h3>
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
					<h3 className="score-header">Cumulative score:</h3>
				</div>
		</div>
	)
}
export default StudentResult
