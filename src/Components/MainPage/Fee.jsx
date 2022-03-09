import "../css/MainPage/fee.css";
import { useAuthContext } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
const Fee = () => {
	let choice = ["orangered", "blue", "green", "rgb(51, 47, 47)"];
	let backgroundColor = choice[Math.floor(Math.random() * choice.length)];

	const { getAuthToken } = useAuthContext();
	const [feeData, setFeeData] = useState({});

	const fetchFeeDetails = async () => {
		const FEE_URL = "http://localhost:8000/fee/";
		let response = await fetch(FEE_URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAuthToken()}`,
			},
		});
		let data = await response.json();

		setFeeData(data[0]);
	};
	useEffect(() => {
		fetchFeeDetails();
	}, []);
	const { paid_fee, remaining_fee, total_fee } = feeData;
	return (
		<div>
			<h3 className="heading-fee">Fee info</h3>
			<div className="div-fee" style={{ backgroundColor }}>
				<div class="fee-p">
					<p> total:</p>
					<p>billed:</p>
					<p>balance:</p>
				</div>
				<div>
					<p>{total_fee}</p>
					<p>{paid_fee}</p>
					<p>{remaining_fee}</p>
				</div>
			</div>
		</div>
	);
};
export default Fee;
