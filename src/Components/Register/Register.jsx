import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [avatar, setAvatar] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "username":
				setUsername(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			case "confirmPassword":
				setConfirmPassword(value);
				break;
			case "avatar":
				setAvatar(value);
				break;
			default:
				break;
		}
	};

	return (
		<div className="Register">
			<h1>Register to Save Leo</h1>
			<div className="RegisterContainer">
				<div className="Left">
					<div className="LeftContainer">
						<span>
							Thank you for your interest in helping Save Leo. Please fill out
							the form on the right to register for an account.
						</span>

						<p>
							If you already have an account, please Login instead.
						</p>
						<button
							className="RegisterButton"
							onClick={() => {
								window.location.href = "/account/login";
							}}
						>
							Login
						</button>
					</div>
				</div>
				<div className="Right">
					<div className="FormBox">
						{/*Login form*/}
						<form
							className="Form"
							onSubmit={(e) => {
								e.preventDefault();
								axios
									.post("http://localhost:4000/app/Register", {
										username,
										email,
										password,
										confirmPassword,
										avatar,
									})
									.then((res) => {
										console.log(res);
									})
									.catch((err) => {
										console.log(err);
									});

								setUsername("");
								setEmail("");
								setPassword("");
								setConfirmPassword("");
								setAvatar("");
								

								window.location.href = "/account/login";
							}}
						>
							<div className="FormInput">
								<input
									type="text"
									placeholder="Username"
									name="username"
									value={username}
									onChange={handleChange}
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									value={email}
									onChange={handleChange}
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={password}
									onChange={handleChange}
								/>
								<input
									type="password"
									placeholder="Confirm Password"
									name="confirmPassword"
									value={confirmPassword}
									onChange={handleChange}
								/>
								<input
									type="file"
									placeholder="Avatar"
									name="avatar"
									value={avatar}
									onChange={handleChange}
								/>
							</div>
							{/*check box*/}
							<div className="Checkbox">
								<div className="FormCheckbox">
									<div
										className="FormCheckbox"
										style={{ display: "flex", alignItems: "center" }}
									>
										<input
											type="checkbox"
											style={{ width: "20px", height: "20px" }}
										/>
										<span>Agree to terms and conditions</span>
									</div>
								</div>
							</div>
							{/*Login button*/}
							<div className="FormButton">
								<button type="submit" value="Register">
									Register
								</button>
							</div>
						</form>
					</div>
					<h1>Or Register with:</h1>
					{/*Login with google*/}
					<div className="FormBox">
						<div className="Form">
							<div className="FormButton">
								<button type="submit">
									<i className="fab fa-google"></i>
									Google
								</button>
								<button type="submit">
									<i className="fab fa-facebook"></i>
									Facebook
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
