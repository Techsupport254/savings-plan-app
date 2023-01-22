import React from "react";
import "./Login.css";

const Login = () => {
    // login with google account api
    const responseGoogle = (response) => {
        console.log(response);
    };


	return (
		<div className="Login">
			<div className="LoginContainer">
				<div className="FormBox">
					{/*Login form*/}
					<div className="Form">
						<h1>Login to Save Leo</h1>
						<div className="FormInput">
							<input type="text" placeholder="Username" />
							<input type="password" placeholder="Password" />
						</div>
						{/*check box*/}
						<div className="Checkbox">
							<div className="FormCheckbox">
								<input type="checkbox" />
								<span>Remember me</span>
							</div>
							<div className="FormCheckbox">
								<div className="FormCheckbox">
									<input type="checkbox" />
									<span>Agree to terms and conditions</span>
								</div>
							</div>
						</div>
						{/*Login button*/}
						<div className="FormButton">
							<button type="submit">Login</button>
						</div>
						<h4>Don't have an account? 
							<a href="/register">Register here</a>
						</h4>
					</div>
				</div>
				<h1>Or login with:</h1>
				{/*Login with google*/}
				<div className="FormBox">
					<div className="Form">
						<div className="FormButton">
							<button type="submit"
                                onClick={responseGoogle}
                            >
								<i className="fab fa-google"></i>
								Google
							</button>
                            <button
                                type="submit"
                                onClick={responseGoogle}
                            >
                                <i className="fab fa-facebook"></i>
                                Facebook
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
