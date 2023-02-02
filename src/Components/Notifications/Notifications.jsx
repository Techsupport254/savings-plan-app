import React, { useState } from "react";
import "./Notifications.css";
import { notificationData } from "../../Data";

const Notifications = () => {
	const [read, setRead] = React.useState(false);

	const handleRead = () => {
		setRead(true);
	};
	return (
		<div className="Notifications">
			<div className="Header">
				<h3>Notifications</h3>
				{
					// number of unread notifications
					<span className="NotificationCount">{notificationData.length}</span>
				}
				<i className="fas fa-bell"></i>
				{/* mark all as read */}
				<i className="fas fa-check" onClick={() => setRead(true)}></i>
			</div>
			<div className="NotificationsContainer">
				{notificationData.map((notification, id) => (
					<div
						className={read ? "Notification Read" : "Notification Unread"}
						key={id}
						onClick={handleRead}
					>
						<p>{notification.date}</p>
						<div className="NotificationContainer">
							<span>{notification.message}</span>
							<p>{notification.time}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notifications;
