import React, { useState, useEffect } from "react";
import "./CardSavings.css";

const CardSavings = () => {
	const [currentSavings, setCurrentSavings] = useState(0);
	const [savedDates, setSavedDates] = useState([]);
	const [todaySaved, setTodaySaved] = useState(false);
	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();
	const currentDate = today.getDate();

	useEffect(() => {
		const getPreviousDates = () => {
			const previousMonthDates = [];
			for (let month = 0; month < currentMonth; month++) {
				const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
				for (let date = 1; date <= daysInMonth; date++) {
					previousMonthDates.push(date);
				}
			}
			return previousMonthDates;
		};

		const previousDates = Array.from({ length: currentDate }, (_, i) => i + 1)
			.concat(getPreviousDates())
			.filter((date) => !savedDates.includes(date))
			.reduce((acc, date) => acc + date, 0);

		setCurrentSavings(currentSavings + previousDates);
		setSavedDates([
			...savedDates,
			...Array.from({ length: currentDate }, (_, i) => i + 1),
			...getPreviousDates(),
		]);
	}, [currentSavings, savedDates, currentMonth, currentYear, currentDate]);

	const handleSaveToday = () => {
		if (!todaySaved) {
			setCurrentSavings(currentSavings + currentDate);
			setSavedDates([...savedDates, currentDate]);
			setTodaySaved(true);
		}
	};

	return (
		<div className="CardSavings">
			<div className="CardContainer">
				<span>KES {currentSavings}</span>
				<button disabled={todaySaved} onClick={handleSaveToday}>
					Save Today
				</button>
				<button>Save for previous dates</button>
			</div>
		</div>
	);
};

export default CardSavings;
