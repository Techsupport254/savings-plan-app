import "./App.css";
import Logo from "./Assets/IMGS/logo.png";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainDash from "./Components/mainDash/MainDash";
import RightBar from "./Components/Rightbar/RightBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [loading, setLoading] = React.useState(true);
	// page loading
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return (
			<div className="Loading">
				<div className="LoadingContainer">
					<img src={Logo} />
					<span></span>
				</div>
			</div>
		);
	}

	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<div className="AppGlass">
						<div className="column">
							<Sidebar />
						</div>
						<div className="column">
							<MainDash />
						</div>
						<div className="column">
							<RightBar />
						</div>
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
