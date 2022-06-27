import Header from "../MainPage/Header"
import "../css/BookUnit/bookunit.css"
import { useEffect, useState } from "react"

import { useAuthContext } from "../../Context/AuthContext"
const BookUnits = () => {
	let { getAuthToken } = useAuthContext()
	let [units, setUnits] = useState([])

	let [bookedUnits, setBookedUnits] = useState([])

	let addOrRemoveBookedUnit = (unit) => {
		let index = bookedUnits.findIndex((e) => e.unit_code === unit.unit_code)
		if (index === -1) {
			setBookedUnits([...bookedUnits, unit])
		} else {
			let x = bookedUnits
			x.splice(index, 1)
			setBookedUnits(x)
		}
	}

	let fetchAllUnits = async () => {
		const UNITS_URL = "http://localhost:8000/units/"
		let response = await fetch(UNITS_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		})
		setUnits(await response.json())
	}
	let unitTableView = (unit) => {
		return (
			<tr>
				<td id="td-unit-code">{unit.unit_code}</td>
				<td id="td-unit-name">{unit.unit_name}</td>
				<td id="td-checkbox">
					<input
						type="checkbox"
						onClick={() => {
							addOrRemoveBookedUnit(unit)
						}}
					/>
				</td>
			</tr>
		)
	}
	let displayAllUnits = () => {
		return units.map(unitTableView)
	}

	let bookSelectedUnits = async () => {
		const BOOK_UNITS_URL = "http://localhost:8000/book-units/"
		await fetch(BOOK_UNITS_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify(bookedUnits),
		})
		window.location = "/dash"
	}

	useEffect(() => {
		fetchAllUnits()
	}, [])

	return (
		<div className="bookunit">
			<Header />
			<div className="modal">
				<div className="modal-content" id="myModal">
					<div className="modal-header">
						<h4 id="units">Units</h4>
					</div>
					<div className="modal-body">
						<div>
							<table id="table">
								<thead>
									<tr>
										<th>unit code</th>
										<th>unit name</th>
									</tr>
								</thead>
								<tbody>{displayAllUnits()}</tbody>
							</table>
						</div>
					</div>
				</div>
				<button id="myBtn" type="submit" onClick={bookSelectedUnits}>
					book units
				</button>
			</div>
		</div>
	)
}

// export const Unit = ({ unit, onClick }) => (
// 	<tr>
// 		<td id="td-unit-code">{unit.unit_code}</td>
// 		<td id="td-unit-name">{unit.unit_name}</td>
// 		<td id="td-checkbox">
// 			<input type="checkbox" onClick={onClick} />
// 		</td>
// 	</tr>
// )

export default BookUnits
