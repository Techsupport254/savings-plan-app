import React from "react";
import "./MainDash.css";
import SidebarPages from "../../SidebarPages";

const MainDash = () => {
	return (
		<React.Fragment>
			<section>
				<>
					<div className="mainDash">
						<SidebarPages />
					</div>
				</>
			</section>
		</React.Fragment>
	);
};

export default MainDash;
