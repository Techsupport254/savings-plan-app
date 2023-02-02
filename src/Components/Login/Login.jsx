import React, {useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
	// login function
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function login(e) {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:4000/account/login", {
				username,
				password,
			});
			console.log(response);
		} catch (err) {
			console.log(err);
		}

		setUsername("");
		setPassword("");

		window.location.href = "/account/dashboard";
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "username") {
			setUsername(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	return (
		<div className="Login">
			<div className="LoginContainer">
				<div className="Left">
					<h1>Save Leo</h1>
					<div className="LeftContainer">
						<span> Thank you for visiting Save Leo web app </span>
						<span>Please login for more experince</span>
						<span>Signup here if you don't have an account</span>

						{/* sign up button */}
						<div className="FormButton">
							<button type="submit">
								<Link to="/account/register">Sign Up</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="Right">
					<div className="FormBox">
						{/*Login form*/}
						<form
							className="Form"
							onSubmit={(e) => {
								e.preventDefault();
								login();
							}}
						>
							<h1>Login to Save Leo</h1>
							<div className="FormInput">
								<input
									type="text"
									placeholder="Username"
									value={username}
									onChange={handleChange}
								/>
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={handleChange}
								/>
							</div>
							{/*check box*/}
							<div className="Checkbox">
								<div className="FormCheckbox">
									<input type="checkbox" />
									<span>Remember me</span>
								</div>
							</div>
							{/*Login button*/}
							<div className="FormButton">
								<button type="submit" name="login">
									Login
								</button>
							</div>
						</form>
					</div>
					<h1>Or login with:</h1>
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

export default Login;
