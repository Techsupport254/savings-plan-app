import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Components/Pages/Account/Account";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import About from "./Components/Pages/About/About";
import Savings from "./Components/Pages/Savings/Savings";
import Loans from "./Components/Pages/Loans/Loans";
import Calendar from "./Components/Pages/Calendar/Calendar";
import Reports from "./Components/Pages/Reports/Reports";
import History from "./Components/Pages/History/History";
import Settings from "./Components/Pages/Settings/Settings";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const SidebarPages = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/account" element={<Account />} />
				<Route path="/account/dashboard" element={<Dashboard />} />
				<Route path="/account/about" element={<About />} />
				<Route path="/account/savings" element={<Savings />} />
				<Route path="/account/loans" element={<Loans />} />
				<Route path="/account/calendar" element={<Calendar />} />
				<Route path="/account/reports" element={<Reports />} />
				<Route path="/account/history" element={<History />} />
				<Route path="/account/settings" element={<Settings />} />
				<Route path="/account/register" element={<Register />} />
				<Route path="/account/login" element={<Login />} />
			</Routes>
		</React.Fragment>
	);
};

export default SidebarPages;
