import React, { useState } from "react";
import "./Savings.css";
import CardSavings from "../../CardSavings/CardSavings";
import Table from "../../Table/Table";
import Progress from "../../CardSave/CardSave";
import SavingsTable from "../../SavingsTable/SavingsTable";

const Savings = () => {
	const [currentSavings, setCurrentSavings] = useState(0);
	const [savedDates, setSavedDates] = useState([]);
	const [notifications, setNotifications] = useState([]);

	const getPreviousDates = (savedDates) => {
		const today = new Date();
		const currentMonth = today.getMonth();
		const currentYear = today.getFullYear();
		const currentDate = today.getDate();
		const previousMonthDates = [];
		for (let month = 0; month < currentMonth; month++) {
			const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
			for (let date = 1; date <= daysInMonth; date++) {
				previousMonthDates.push(date);
			}
		}
		return Array.from({ length: currentDate }, (_, i) => i + 1)
			.concat(previousMonthDates)
			.filter((date) => !savedDates.includes(date))
			.reduce((acc, date) => acc + date, 0);
	};

	const handleSaveToday = () => {
		const today = new Date().getDate();
		setCurrentSavings(currentSavings + today);
		setSavedDates([...savedDates, today]);
		setNotifications([
			...notifications,
			{ message: `Successfully saved KES ${today}`, date: new Date() },
		]);
	};

	const handleSavePrevious = () => {
		const previousDates = getPreviousDates(savedDates);
		setCurrentSavings(currentSavings + previousDates);
		setSavedDates([
			...savedDates,
			...Array.from({ length: previousDates }, (_, i) => i + 1),
		]);
		setNotifications([
			...notifications,
			{ message: `Successfully saved KES ${previousDates}`, date: new Date() },
		]);
	};

	return (
		<div className="savings">
			<SavingsTable />
		</div>
	);
};

export default Savings;
