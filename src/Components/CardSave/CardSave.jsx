import React from "react";
import "./CardSave.css";

const Progress = ({ currentMonth, currentYear }) => {
	const circumference = 2 * Math.PI * 7;
	const currentMonthProgress = (currentMonth / 30) * 100;
	const currentYearProgress = (currentYear / 365) * 100;

	
	return (
		<div className="Progress">
			<div className="progress-container">
				<div className="progress-bar-container">
					<h3
						style={
							// color
							{color:"#2980b9"}
						}
					>
						Monthly
					</h3>
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
					<h3
						style={
							// color
							{color:"#f39c12"}
						}
					>
						Yearly
					</h3>
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
