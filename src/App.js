import React, { useState, useEffect } from "react";

import "./App.css";
import CountryCode from "./components/CountryCode";

function App() {
	const [countryCode, setCountryCode] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:5000/countryCode");
			const data = await res.json();
			setCountryCode(data);
		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<div className="app">
				<CountryCode countryCode={countryCode} />
			</div>
		</div>
	);
}

export default App;
