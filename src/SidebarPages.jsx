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

const SidebarPages = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/account" element={<Account />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/about" element={<About />} />
				<Route path="/savings" element={<Savings />} />
				<Route path="/loans" element={<Loans/>} />
				<Route path="/calendar" element={<Calendar/>}/>
				<Route path="/reports" element={<Reports/>}/>
				<Route path="/history" element={<History/>}/>
				<Route path="/settings" element={<Settings/>}/>
			</Routes>
		</React.Fragment>
	);
};

export default SidebarPages;
