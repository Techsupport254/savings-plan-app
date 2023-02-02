import React from "react";
import "./Dashboard.css";
import Table from "../../Table/Table";
import Cards from "../../Cards/Cards";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<div className="DashboardContainer">
				<div className="Cards">
					<Cards />
				</div>
				<div className="Table">
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
