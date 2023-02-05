import React from "react";
import "./CardSavings.css";

const Progress = ({ currentMonth, currentYear }) => {
	const circumference = 2 * Math.PI * 7;
	const currentMonthProgress = (currentMonth / 30) * 100;
	const currentYearProgress = (currentYear / 365) * 100;

	// current savings
	const currentSavings =
		[currentMonthProgress, currentYearProgress].reduce((acc, curr) => {
			return acc + curr;
		}) / 2;

	return (
		<div className="Progress">
			<span>Kes. {currentSavings}</span>
			<button>Save Today</button>
			<div className="progress-container">
				<div className="progress-bar-container">
					<div className="progress-bar">
						<svg width="100" height="100">
							<circle
								className="progress-bar__circle"
								cx="50"
								cy="50"
								r="30"
								stroke="#2980b9"
								strokeWidth="7"
								strokeDasharray={`${
									circumference * (currentMonthProgress / 100)
								} ${circumference}`}
							/>
						</svg>
						<div className="progress-bar__percentage">
							{currentMonthProgress.toFixed(2)}%
						</div>
					</div>
				</div>
				<div className="progress-bar-container">
					<div className="progress-bar">
						<svg width="100" height="100">
							<circle
								className="progress-bar__circle"
								cx="50"
								cy="50"
								r="30"
								stroke="#f39c12"
								strokeWidth="7"
								strokeDasharray={`${
									circumference * (currentYearProgress / 100)
								} ${circumference}`}
							/>
						</svg>
						<div className="progress-bar__percentage">
							{currentYearProgress.toFixed(2)}%
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;
