import React from "react";
import "./Account.css";
import Login from "./../../Login/Login";
import Register from "./../../Register/Register";

const Account = () => {
	return (
		<React.Fragment>
			<section>
				<div className="Account">
					<div className="Left">
						<Register />
					</div>
					<div className="Right">
						<Login />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Account;
