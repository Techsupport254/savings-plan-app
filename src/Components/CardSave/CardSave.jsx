import React from "react";
import "./CardSave.css";

const Progress = () => {
	return (
		<div className="CardLoan">
			<span>
				{/* icon */}
				<i className="fas fa-download"></i>
				<p>Debit: Kes. XXX</p>
			</span>
			<span>
				{/* icon for upload */}
				<i className="fas fa-upload"></i>
				<p>Credit: Kes. XXX</p>
			</span>
		</div>
	);
};

export default Progress;
