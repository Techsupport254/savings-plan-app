import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(null);
	const [time, setTime] = useState(new Date());
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [markedDates, setMarkedDates] = useState([]);
	const [unmarkedDates, setUnmarkedDates]=useState([]);

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
		setModalIsOpen(true);

		if (selectedDate === date) {
			setSelectedDate(null);
			setModalIsOpen(false);
		}
	};
	const handleCurrentTime = () => {
		// display time which seconds update every time
		setInterval(() => {
			setTime(new Date());
		}, 1000);
		return time.toLocaleTimeString();
	};

	// set dates that are not marked as unmarked dates
	
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
					<div className="Current">
						<span className="current-month">
							{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
						</span>
						<span className="CurrentTime">{handleCurrentTime()}</span>
					</div>
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
										className +
										(selectedDate === date ? " SelectedDate" : "") +
										(markedDates.find(
											(d) =>
												d.date === date &&
												d.month === currentDate.getMonth() &&
												d.year === currentDate.getFullYear()
										)
											? " MarkedDate"
											: "") +
										(unmarkedDates.find(
											(d) =>
												d.date === date &&
												d.month === currentDate.getMonth() &&
												d.year === currentDate.getFullYear()
										)
											? " UnmarkedDate"
											: "")
									}
									onClick={() => handleDateClick(date)}
									onContextMenu={(e) => {
										e.preventDefault();
										handleDateClick(date);
										setModalIsOpen(true);
									}}
								>
									{date}
								</span>
							);
						})}
						{
							// show modal
							modalIsOpen && (
								<div className="Modal">
									<div className="ModalContainer">
										<div className="ModalHeader">
											<h3>
												{markedDates.find(
													(d) =>
														d.date === selectedDate &&
														d.month === currentDate.getMonth() &&
														d.year === currentDate.getFullYear()
												)
													? "Unmark"
													: "Mark"}{" "}
												Date
											</h3>
											<button
												className="CloseModal"
												onClick={() => setModalIsOpen(false)}
											>
												<i className="fas fa-times"></i>
											</button>
										</div>

										<div className="ModalBody">
											<div className="MarkDate">
												<button
													onClick={() => {
														if (
															markedDates.find(
																(d) =>
																	d.date === selectedDate &&
																	d.month === currentDate.getMonth() &&
																	d.year === currentDate.getFullYear()
															)
														) {
															setMarkedDates(
																markedDates.filter(
																	(d) =>
																		d.date !== selectedDate ||
																		d.month !== currentDate.getMonth() ||
																		d.year !== currentDate.getFullYear()
																)
															);
														} else {
															setMarkedDates([
																...markedDates,
																{
																	date: selectedDate,
																	month: currentDate.getMonth(),
																	year: currentDate.getFullYear(),
																},
															]);
														}

														setModalIsOpen(false);
													}}
												>
													{markedDates.find(
														(d) =>
															d.date === selectedDate &&
															d.month === currentDate.getMonth() &&
															d.year === currentDate.getFullYear()
													) ? (
														<i className="fas fa-check"></i>
													) : (
														<i className="far fa-check-circle"></i>
													)}
												</button>
											</div>
											<div className="ModalDate">
												<span>{selectedDate} </span>
												<span>{monthNames[currentDate.getMonth()]} </span>
												<span>{currentDate.getFullYear()}</span>
											</div>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
			<div className="SavedDates">
				<h2>Saved Dates</h2>
				{markedDates.map((date, i) => (
					<div key={i} className="SavedDate">
						<span>{date.date} </span>
						<span>{monthNames[date.month]} </span>
						<span>{date.year}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
