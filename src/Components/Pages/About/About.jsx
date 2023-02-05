import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="About">
			<div className="AboutContainer">
				<h3>About the Savings Plan App</h3>
				<ul>
					<li>
						The Savings Plan web app is a tool designed to help users manage and
						track their financial savings goals. The app provides a simple and
						intuitive interface for setting up savings plans and tracking
						progress towards those goals.
					</li>
					<li>
						Users start by creating an account and setting up a savings plan.
						This involves specifying the amount they would like to save, the
						deadline for reaching their goal, and any other relevant
						information. Once a savings plan has been created, users can
						regularly track their progress and make adjustments to their plans
						as needed.
					</li>
					<li>
						The app includes several features to help users stay on track with
						their savings goals. For example, users can set up automatic savings
						transfers from their bank account to their savings account, making
						it easier to consistently save money. They can also receive
						reminders and notifications to help them stay focused on their
						goals.
					</li>
					<li>
						Additionally, the app offers a range of financial tools and
						resources to help users make informed decisions about their savings
						plans. This includes access to articles and guides on personal
						finance, as well as calculators and other tools for estimating how
						long it will take to reach their goals and how much they need to
						save each month to get there.
					</li>
					<li>
						Overall, the Savings Plan web app is an excellent resource for
						anyone looking to take control of their finances and save more
						effectively. Whether you're trying to save for a down payment on a
						house, a big purchase, or just a rainy day fund, the app provides
						the tools and resources you need to reach your goals.
					</li>
				</ul>
			</div>
			<div className="Terms">
				<h3>Terms and Conditions</h3>
				<h4>
					The following are the terms and conditions of using the savings plan
					app:
				</h4>
				<ol>
					<li>
						User Agreement: By using the savings plan app, you agree to be bound
						by these terms and conditions. If you do not agree with any of these
						terms, please do not use the app.
					</li>
					<li>
						User Responsibility: You are solely responsible for maintaining the
						confidentiality of your account information and for all activities
						that occur under your account.
					</li>
					<li>
						Content and Material: The content and material provided by the
						savings plan app is for general information purposes only and is not
						intended to be a substitute for professional advice.
					</li>
					<li>
						Modifications: The terms and conditions may be modified at any time
						and without prior notice. Your continued use of the savings plan app
						after any modifications indicates your acceptance of the modified
						terms and conditions.
					</li>
					<li>
						Limitation of Liability: The savings plan app shall not be liable
						for any direct, indirect, incidental, special or consequential
						damages, including but not limited to loss of profits, data, use or
						goodwill, arising out of or in connection with the use or
						performance of the savings plan app.
					</li>
					<li>
						Intellectual Property Rights: All intellectual property rights in
						the savings plan app and its content are the property of the savings
						plan app or its licensors. You may not reproduce, distribute, or
						make any commercial use of the content or material provided by the
						savings plan app without prior written consent from the savings plan
						app.
					</li>
					<li>
						Dispute Resolution: If a dispute arises between you and the
						savings plan app, we agree to first try to resolve the dispute
						informally.
					</li>
					<li>
						Governing Law: These terms and conditions shall be governed by and
						construed in accordance with the laws of the jurisdiction in which
						the savings plan app is based.
					</li>
				</ol>
				<p>
					By using the savings plan app, you acknowledge that you have read,
					understood, and agree to be bound by these terms and conditions.
				</p>
			</div>
			<div className="BuymeCoffee">
				<h3>Buy Me Coffee</h3>
				<p>
					If you find this app useful and would like to support me, you can buy
					me a coffee by clicking the button below.
				</p>
				<button className="Support" onClick={() => window.open()}>
					Support Me
				</button>
			</div>
		</div>
	);
};

export default About;
