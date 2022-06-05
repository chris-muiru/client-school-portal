import "../css/BookUnit/bookunit.css";
import { useState, useEffect } from "react";
import { Unit, UnitsTable } from "./View";
import { useAuthContext } from "../../Context/AuthContext";
// get all available units

const BookUnits = () => {
	const [units, setUnits] = useState([]);
	const [selectedUnits, setSelectedUnits] = useState([]);

	let { getAuthToken } = useAuthContext();

	const getUnits = async () => {
		const UNITS_URL = "http://localhost:8000/units/";
		let response = await fetch(UNITS_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		});
		setUnits(await response.json());
	};

	// post selected units to server
	const BOOK_UNITS_URL = "http://localhost:8000/book-units/";
	const registerUnits = (units) => {
		fetch(BOOK_UNITS_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
			body: JSON.stringify(units),
		});
		window.location = "/dash";
	};

	useEffect(() => {
		getUnits();
	}, []);

	const selectUnit = (unit) => {
		const index = selectedUnits.findIndex(
			(entry) => entry.unit_code === unit.unit_code
		);

		if (index === -1) {
			selectedUnits.push(unit);
		} else {
			selectedUnits.splice(index, 1);
		}
	};

	const submitUnits = async () => {
		try {
			await registerUnits(selectedUnits);
			// display message
		} catch (error) {
			console.log(error);
			// report error
		} finally {
			setSelectedUnits([]);
		}
	};

	return (
		<UnitsTable submit={submitUnits}>
			{" "}
			{units.map((unit) => {
				return (
					<Unit
						key={unit.unit_code}
						unit={unit}
						onClick={() => selectUnit(unit)}
					/>
				);
			})}
		</UnitsTable>
	);
};

export default BookUnits;
