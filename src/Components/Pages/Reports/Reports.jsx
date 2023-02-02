import React, { useState } from "react";
import "./Reports.css";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{ name: "Jan", savings: 300 },
	{ name: "Feb", savings: 0 },
	{ name: "Mar", savings: 0 },
	{ name: "Apr", savings: 0 },
	{ name: "May", savings: 0 },
	{ name: "Jun", savings: 0 },
	{ name: "Jul", savings: 0 },
	{ name: "Aug", savings: 0 },
	{ name: "Sep", savings: 0 },
	{ name: "Oct", savings: 0 },
	{ name: "Nov", savings: 400 },
	{ name: "Dec", savings: 10 },
];

const Report = () => {
	const [currentData, setCurrentData] = useState(data);

	const updateData = (month, amount) => {
		setCurrentData((prevData) => {
			const newData = [...prevData];
			newData.forEach((d) => {
				if (d.name === month) {
					d.savings += amount;
				}
			});
			return newData;
		});
	};

	return (
		<div className="report-container">
			<LineChart
				width={800}
				height={400}
				data={currentData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="savings"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</div>
	);
};

export default Report;
