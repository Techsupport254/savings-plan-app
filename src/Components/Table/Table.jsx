import React, { useState, useEffect } from "react";
import "./Table.css";

const SavingsTable = () => {
	const [dates, setDates] = useState([]);
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

	useEffect(() => {
		const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();
		const allDates = Array.from({ length: totalDays }, (_, i) => ({
			id: i + 1,
			saved: false,
			savedAt: null,
		}));
		setDates(allDates);
	}, [selectedYear, selectedMonth]);

	const handleSave = (id) => {
		const updatedDates = dates.map((date) => {
			if (date.id === id) {
				return {
					...date,
					saved: true,
					savedAt:
						new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						}) +
						" " +
						new Date().toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "numeric",
						}),
				};
			}
			return date;
		});
		setDates(updatedDates);
	};

	const handleYearSelect = (event) => {
		setSelectedYear(event.target.value);
	};

	const handleMonthSelect = (event) => {
		setSelectedMonth(event.target.value);
	};

	const years = Array.from({ length: 8 }, (_, i) => 2023 + i);

	return (
		<div className="Table">
			<div className="Top">
				<div className="Upper">
					<span>
						Year
						<select value={selectedYear} onChange={handleYearSelect}>
							{years.map((year) => (
								<option value={year} key={year}>
									{year}
								</option>
							))}
						</select>
					</span>
					<span>
						Month
						<select value={selectedMonth} onChange={handleMonthSelect}>
							{Array.from({ length: 12 }, (_, i) => {
								const month = new Date(0, i).toLocaleString("default", {
									month: "short",
								});
								return (
									<option value={i} key={i}>
										{month}
									</option>
								);
							})}
						</select>
					</span>
				</div>
				<div className="Lower">
					<thead>
						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Status</th>
							<th>Saved At</th>
							<th>Action</th>
						</tr>
					</thead>
				</div>
			</div>
			<div className="TableContainer">
				<div>
					<table>
						<tbody>
							{dates.map((date) => (
								<tr className={date.saved ? "Saved" : ""} key={date.id}>
									<td>{date.id}</td>
									<td>{date.id}</td>
									<td>{date.saved ? "Saved" : "Not Saved"}</td>
									<td>
										<span>{date.savedAt || "-"}</span>
									</td>
									<td>
										<button
											className="SaveButton"
											onClick={() => handleSave(date.id)}
											disabled={date.saved}
										>
											{date.saved ? "Saved" : "Save"}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SavingsTable;
