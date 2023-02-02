import React from "react";
import "./RightBar.css";
import Notifications from "../Notifications/Notifications";

const RightBar = () => {
	return (
		<div className="RightBar">
			<div className="RightBarContainer">
				<Notifications />
			</div>
		</div>
	);
};

export default RightBar;
