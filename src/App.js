import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainDash from "./Components/mainDash/MainDash";
import RightBar from "./Components/Rightbar/RightBar";
import React from "react";
import {BrowserRouter as Router } from "react-router-dom";

function App() {
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
