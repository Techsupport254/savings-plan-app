import React, { useState } from "react";
import "./Notifications.css";
import { notificationData } from "../../Data";
import { notification } from "antd";
import { groupBy, uniq } from "lodash";

const Notifications = () => {
	const [read, setRead] = React.useState({});

	const groupedNotifications = groupBy(
		notificationData,
		(notification) => notification.date.split(" ")[0]
	);

	const uniqueDates = uniq(
		notificationData.map((notification) => notification.date.split(" ")[0])
	);

	return (
		<div className="Notifications">
			<div className="Header">
				<span>Notifications</span>
				<span className="NotificationCount">
					{Object.values(groupedNotifications).reduce(
						(unread, group) =>
							unread +
							group.filter((notification) => !read[notification.id]).length,
						0
					)}
					<i className="fas fa-bell"></i>
				</span>
				{/* mark all as read */}
				<i
					className="fas fa-check"
					onClick={() => setRead(notificationData.map((n) => n.id))}
				></i>
			</div>
			<div className="NotificationsContainer">
				{uniqueDates.map((date) => (
					<div key={date}>
						<p className="NotificationDate">{date}</p>
						{groupedNotifications[date].map((notification) => (
							<div
								className={
									read[notification.id]
										? "Notification Read"
										: "Notification Unread"
								}
								key={notification.id}
								onClick={
									// mark clicked notification as read
									() => setRead({ ...read, [notification.id]: true })
								}
							>
								<div className="NotificationContainer">
									<span>{notification.message}</span>
									<p>{notification.time}</p>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Notifications;
