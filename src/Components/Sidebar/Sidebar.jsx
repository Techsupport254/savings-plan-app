import React from "react";
import "./Sidebar.css";
import Logo from "../../Assets/IMGS/logo.png";
import { menuData } from "../../Data";
import { Link as NavLink } from "react-router-dom";

const Sidebar = () => {
	const [active, setActive] = React.useState("Home");
	const changeActive = (item) => {
		setActive(item);
	};

	return (
		<div className="Sidebar">
			<div className="SidebarContainer">
				<div className="Logo">
					<img src={Logo} alt="" />
					<span>Save Leo</span>
				</div>
				<div className="SidebarMenu">
					{menuData.map((item, index) => (
						<div
							className={
								active === item.title
									? "SidebarMenuItem active"
									: "SidebarMenuItem"
							}
							key={index}
							onClick={() => changeActive(item.title)}
						>
							<NavLink to={item.path}>
								<div className="Icon">{item.icon}</div>
							</NavLink>
							<NavLink to={item.path}>
								<div className="Title">
									<span>{item.title}</span>
								</div>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
