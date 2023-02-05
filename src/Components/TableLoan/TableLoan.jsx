import React, { useState } from "react";
import { Modal } from "antd";
import "./TableLoan.css";

const TableLoan = () => {
	const [loans, setLoans] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState(null);
	const [loan, setLoan] = useState({
		id: null,
		name: "",
		loanCategory: "",
		loanType: "",
		issueDate: "",
		status: "",
	});

	const handleAddLoan = () => {
		setShowModal(true);
		setLoan({
			id: null,
			name: "",
			loanCategory: "",
			loanType: "",
			issueDate: "",
			status: "",
		});
	};

	// update loan and replace the old one with the new one
	const handleUpdateLoan = (id) => {
		setShowModal(true);
		setLoan(loan);
	};

	// replace the old loan with the new one
	const replaceLoan = () => {
		const newLoans = loans.map((loan) => {
			if (loan.id === id) {
				return loan;
			}
			return loan;
		});
		setLoans(newLoans);
	};

	const handleDeleteLoan = (id) => {
		const filteredLoans = loans.filter((loan) => loan.id !== id);
		setLoans(filteredLoans);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (loan.issueDate === "") {
			loan.issueDate =
				new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
		}
		if (loan.status === "") {
			loan.status = "Active";
		}

		if (
			loan.name === "" ||
			loan.loanCategory === "" ||
			loan.loanType === "" ||
			loan.amount === ""
		) {
			alert("Please fill all the fields");
			return;
		}
		if (loan.id === null) {
			setLoans([...loans, loan]);
		} else {
			const updatedLoans = loans.map((loan) => {
				if (loan.id === loan.id) {
					return { ...loan, ...loan };
				}
				return loan;
			});
			setLoans(updatedLoans);
		}
		setShowModal(false);
	};

	const handleChange = (event) => {
		setLoan({ ...loan, [event.target.name]: event.target.value });

		// save the updated loan and replace the old one with the new one
		replaceLoan();
	};

	return (
		<div className="Table">
			<div className="Top">
				<div className="Upper">
					<button onClick={handleAddLoan} className="add-loan-button">
						Add Loan
					</button>
					{showModal && (
						<Modal
							title="Add Loan"
							visible={showModal}
							onOk={handleSubmit}
							onCancel={handleCloseModal}
						>
							<form onSubmit={handleSubmit}>
								<label>Name</label>
								<input
									type="text"
									name="name"
									value={loan.name}
									onChange={handleChange}
								/>
								<label>Loan Category</label>
								<input
									type="text"
									name="loanCategory"
									value={loan.loanCategory}
									onChange={handleChange}
								/>
								<label>Loan Type</label>
								<input
									type="text"
									name="loanType"
									value={loan.loanType}
									onChange={handleChange}
								/>
								<label>Amount (Ksh)</label>
								<input
									type="text"
									name="amount"
									value={loan.amount}
									onChange={handleChange}
								/>
								<button type="submit">Submit</button>
							</form>
						</Modal>
					)}
				</div>
				<div className="Lower">
					<thead>
						<tr>
							<th>Name</th>
							<th>Loan Category</th>
							<th>Loan Type</th>
							<th>Amount (Ksh)</th>
							<th>Issue Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
				</div>
			</div>
			<div className="TableContainer">
				<div>
					<table>
						<tbody>
							{loans.map((loan) => (
								<tr key={loan.id}>
									<td>{loan.name}</td>
									<td>{loan.loanCategory}</td>
									<td>{loan.loanType}</td>
									<td>{loan.amount}</td>
									<td>{loan.issueDate}</td>
									<td>{loan.status}</td>
									<td>
										<button
											onClick={() => handleUpdateLoan(loan.id)}
											className="update-loan-button"
										>
											Update
										</button>
										{showModal && (
											<Modal
												title="Update Loan"
												visible={showModal}
												onOk={handleSubmit}
												onCancel={handleCloseModal}
											>
												<form onSubmit={handleSubmit}>
													<label>Name</label>
													<input
														type="text"
														name="name"
														value={loan.name}
														onChange={handleChange}
													/>
													<label>Loan Category</label>
													<input
														type="text"
														name="loanCategory"
														value={loan.loanCategory}
														onChange={handleChange}
													/>
													<label>Loan Type</label>
													<input
														type="text"
														name="loanType"
														value={loan.loanType}
														onChange={handleChange}
													/>
													<label>Amount (Ksh)</label>
													<input
														type="text"
														name="amount"
														value={loan.amount}
														onChange={handleChange}
													/>
													<button type="submit">Update</button>
												</form>
											</Modal>
										)}
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

export default TableLoan;
