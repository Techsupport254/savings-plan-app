import React, { useState } from "react";
import "./SavingsTable.css";
import CardSavings from "../CardSavings/CardSavings";

const SavingsTable = () => {
	const [data, setData] = useState([
		{
			id: 1,
			date: new Date().toLocaleDateString(),
			currentAmount: 0,
			amountSaved: 0,
			time: new Date().toLocaleTimeString(),
			action: "",
		},
	]);

	const [showModal, setShowModal] = useState(false);
	const [amount, setAmount] = useState("");

	const handleSave = () => {
		setShowModal(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData([
			...data,
			{
				id: data.length + 1,
				date: new Date().toLocaleDateString(),
				currentAmount: data[data.length - 1].currentAmount + parseInt(amount),
				amountSaved: amount,
				time: new Date().toLocaleTimeString(),
				action: "",
			},
		]);
		setShowModal(false);
	};

	return (
		<div className="SavingsTable">
			<div className="Cards">
				<CardSavings />
			</div>
			<div className="Table">
				<div className="Top">
					<button>
						{/* add icon */}
						<i className="fas fa-plus"></i>
						<span>Add Savings</span>
					</button>
				</div>
				<div className="Lower">
					<thead>
						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Current Amount</th>
							<th>Amount Saved</th>
							<th>Time</th>
							<th>Action</th>
						</tr>
					</thead>
				</div>
				<div className="TableContainer">
					<div>
						<table>
							<tbody>
								{data.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.date}</td>
										<td>Kes. {item.currentAmount}</td>
										<td>Kes. {item.amountSaved}</td>
										<td>{item.time}</td>
										<td>
											<button onClick={handleSave}>Save</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{showModal && (
					<div className="modal">
						<form onSubmit={handleSubmit}>
							<label>
								Amount:
								<input
									type="text"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									required
								/>
							</label>
							<button type="submit">Submit</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default SavingsTable;
