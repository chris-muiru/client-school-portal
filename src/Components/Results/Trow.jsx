const Trow = ({ unit_name, unit_code, marks, grade }) => {
	return (
		<tr>
			<td>{unit_name}</td>
			<td>{unit_code}</td>
			<td>{marks}</td>
			<td>{grade}</td>
		</tr>
	);
};

export default Trow;
