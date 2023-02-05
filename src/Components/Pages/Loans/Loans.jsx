import React, { useState } from "react";
import CardsLoans from "../../CardsLoans/CardsLoans";
import TableLoan from "../../TableLoan/TableLoan";
import "./Loans.css";

const Loans = () => {
	const [loanType, setLoanType] = useState("debit");
	const [amount, setAmount] = useState("");
	const [term, setTerm] = useState("");
	const [interestRate, setInterestRate] = useState("");
	const [repayment, setRepayment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform the loan calculation and submission logic here
	};

	return (
		<div className="loans-container">
			<div className="Cards">{<CardsLoans />}</div>
			<div className="Table">
				<TableLoan />
			</div>
		</div>
	);
};

export default Loans;
