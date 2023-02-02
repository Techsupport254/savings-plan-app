import React from "react";
import "./Cards.css";
import CardSavings from "../CardSavings/CardSavings";
import CardQuote from "../CardQuote/CardQuote";
import CardSave from "../CardSave/CardSave";

const Cards = ({ savings, save, quote }) => {
	return (
		<div className="Cards">
			<div className="CardsContainer">
				<div className="Card savings-card">
					<h4 className="Header">Savings</h4>
					<CardSavings />
				</div>
				<div className="Card save-card">
					<h4 className="Header">Progress</h4>
					<CardSave />
				</div>
				<div className="Card quotes-card">
					<h4 className="Header">Quote of the Day</h4>
					<CardQuote />
				</div>
			</div>
		</div>
	);
};

export default Cards;
