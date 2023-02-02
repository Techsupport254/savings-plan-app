import React, { useState } from "react";
import "./History.css";

const History = () => {
	const [history, setHistory] = useState([
		{ date: "2022-01-01", activity: "Saved 30 Kenyan Shillings" },
		{ date: "2022-01-02", activity: "Saved 31 Kenyan Shillings" },
		{ date: "2022-01-03", activity: "Saved 32 Kenyan Shillings" },
		{ date: "2022-01-04", activity: "Changed Email Notifications Settings" },
		{ date: "2022-01-05", activity: "Saved 33 Kenyan Shillings" },
	]);

	return (
		<div className="history-container">
			<h1 className="history-title">History</h1>
			<table className="history-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Activity</th>
					</tr>
				</thead>
				<tbody>
					{history.map((entry, index) => (
						<tr key={index}>
							<td>{entry.date}</td>
							<td>{entry.activity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default History;
