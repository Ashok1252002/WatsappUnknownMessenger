import { useState } from "react";
import "./CountryCode.css";

const CountryCode = ({ countryCode }) => {
	const [countryVal, setCountryVal] = useState("+91");

	const onEntery = (e) => {
		setCountryVal(e.target.value);
		console.log(e.target.value);
	};

	const onChange = (e) => {
		setCountryVal(e.target.value);
	};
	return (
		<div className="box1">
			<label className="label">Select Country</label>
			<select
				className="selectVal"
				onChange={onChange}
				value={countryVal.dial_code}
			>
				{countryCode.map((country, i) => (
					<option
						key={i}
						className="options"
						value={country.dial_code}
					>
						{country.name}
					</option>
				))}
			</select>
			<label>Enter Phone Number</label>
			<input
				type="tel"
				value={countryVal}
				placeholder={`Enter phone number`}
				onChange={onEntery}
			/>
			<div className="btn">
				<a href={`https://wa.me/${countryVal}`}>
					<button>Click</button>
				</a>
			</div>
		</div>
	);
};

export default CountryCode;
