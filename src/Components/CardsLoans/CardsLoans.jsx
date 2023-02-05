import React from "react";
import "./CardsLoans.css";

const CardsLoans = () => {
	return (
		<div className="cards-container">
			<div className="Card">
				<h3 className="Header">Debit/Credit</h3>
				<span>
					{/* icon */}
					<i className="fas fa-download"></i>
					<p>Debit: $XXX</p>
				</span>
				<span>
					{/* icon for upload */}
					<i className="fas fa-upload"></i>
					<p>Credit: $XXX</p>
				</span>
			</div>
			<div className="Card">
				<h3 className="Header">Loan Details</h3>
				<p>Loan Type: XX</p>
				<p>Loan Amount: $XXX</p>
				<p>Interest Rate: XX%</p>
				<p>Repayment Period: XX months</p>
			</div>
			<div className="Card">
				{/* fetch verses from API */}
				<h3 className="Header">Bible Verse</h3>
				<p>Verse: XXX</p>
				<p>Book: XXX</p>
				<p>Chapter: XXX</p>
				<p>Verse: XXX</p>
			</div>
		</div>
	);
};

export default CardsLoans;
