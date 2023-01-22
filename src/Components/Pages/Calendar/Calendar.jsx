import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const getDaysInMonth = (month, year) => {
		return new Date(year, month, 0).getDate();
	};

	const getFirstDayOfMonth = (month, year) => {
		return new Date(year, month - 1, 1).getDay();
	};

	const handlePreviousMonth = () => {
		let prevMonth = currentDate.getMonth() - 1;
		let prevYear = currentDate.getFullYear();
		if (prevMonth < 0) {
			prevMonth = 11;
			prevYear--;
		}
		setCurrentDate(new Date(prevYear, prevMonth));
	};

	const handleNextMonth = () => {
		let nextMonth = currentDate.getMonth() + 1;
		let nextYear = currentDate.getFullYear();
		if (nextMonth > 11) {
			nextMonth = 0;
			nextYear++;
		}
		setCurrentDate(new Date(nextYear, nextMonth));
	};

	const handlePreviousYear = () => {
		let prevYear = currentDate.getFullYear() - 1;
		setCurrentDate(new Date(prevYear, currentDate.getMonth()));
	};

	const handleNextYear = () => {
		let nextYear = currentDate.getFullYear() + 1;
		setCurrentDate(new Date(nextYear, currentDate.getMonth()));
	};

	const handleDateClick = (date) => {
		setSelectedDate(date);
	};

	// handle checking dates using right click
	const handleDateRightClick = (date) => {
		// display modal dialog to check the date
		console.log("right click");

		// set the date to be checked
		setSelectedDate(date);

		// display the modal dialog
		
	};

	return (
		<div className="calendar">
			<div className="CalendarContainer">
				<div className="calendar-header">
					<div className="Year">
						{" "}
						<button onClick={handlePreviousYear}>
							<i className="fas fa-angle-left"></i>
							Year
						</button>
						<button onClick={handlePreviousMonth}>
							<i className="fas fa-angle-left"></i>
							Month
						</button>
					</div>
					<span className="current-month">
						{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
					</span>
					<div className="Month">
						{" "}
						<button onClick={handleNextYear}>
							Year
							<i className="fas fa-angle-right"></i>
						</button>
						<button onClick={handleNextMonth}>
							Month
							<i className="fas fa-angle-right"></i>
						</button>
					</div>
				</div>
				<div className="calendar-body">
					<div className="weekdays">
						<span>Sun</span>
						<span>Mon</span>
						<span>Tue</span>
						<span>Wed</span>
						<span>Thu</span>
						<span>Fri</span>
						<span>Sat</span>
					</div>
					<div className="dates">
						{Array.apply(
							null,
							Array(
								getFirstDayOfMonth(
									currentDate.getMonth() + 1,
									currentDate.getFullYear()
								)
							)
						).map((x, i) => (
							<span key={i} className="empty"></span>
						))}
						{Array.apply(
							null,
							Array(
								getDaysInMonth(
									currentDate.getMonth() + 1,
									currentDate.getFullYear()
								)
							)
						).map((x, i) => {
							let date = i + 1;
							let className = "date";
							if (
								date === new Date().getDate() &&
								currentDate.getMonth() === new Date().getMonth() &&
								currentDate.getFullYear() === new Date().getFullYear()
							) {
								className += " current-date";
							}

							return (
								<span
									key={i}
									className={
										className + (selectedDate === date ? " selected-date" : "")
									}
									onClick={() => handleDateClick(date)}
									onContextMenu={(e) => {
										e.preventDefault();
										handleDateRightClick(date);
									}}
								>
									{date}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
