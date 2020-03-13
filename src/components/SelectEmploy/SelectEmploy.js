import React from "react";
import "./selectemploy.style.css";

const SelectEmploy = ({ info }) => {
	console.log(info);

	const { name, imageUrl, salary } = info;

	return (
		<div className="select-people">
			<img src={imageUrl} alt="" />
			<div className="select-people-info">
				<h6>{name}</h6>
				<p>
					Income <span>${salary}</span>
				</p>
			</div>
		</div>
	);
};

export default SelectEmploy;
