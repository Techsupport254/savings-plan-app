import React, { useState, useEffect } from "react";
import "./CardQuote.css";
import Logo from "../../Assets/IMGS/logo.png";

const CardQuote = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const [tags, setTags] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchQuote = async () => {
			const response = await fetch("https://api.quotable.io/random");
			const data = await response.json();
			setQuote(data.content);
			setAuthor(data.author);
			setTags(data.tags);
		};

		fetchQuote();
	}, []);

	// handle loading
	useEffect(() => {
		if (quote && author) {
			setLoading(false);
		}
	}, [quote, author]);

	if (loading) {
		return (
			<div className="LoadingQuote">
				<div className="LoadingQuoteContainer">
					<img src={Logo} />
					<span></span>
				</div>
			</div>
		);
	}

	return (
		<div className="CardQuote">
			<span>{quote}</span>
			<span>-[{tags}]-</span>
			<span>~ {author}</span>
		</div>
	);
};

export default CardQuote;
