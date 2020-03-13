import React from "react";
import "./Statistics.style.css";
import SelectEmploy from "../SelectEmploy/SelectEmploy";
import emptyBox from "../../assest/box.svg";

const Statistics = ({ topEmployList }) => {
	return (
		<div className="statistics">
			<div className="logo">
				<h1>User Data Table</h1>
			</div>
			<div className="detail">
				<h3>Connection statistics</h3>
				<div className="selected-pepoles">
					{topEmployList.length === 0 ? (
						<img className="emptybox" src={emptyBox} alt="" />
					) : (
						topEmployList.map((selectPeople, i) => (
							<SelectEmploy key={i} info={selectPeople} />
						))
					)}
				</div>
				<div className="total">
					<p>Person {topEmployList.length}</p>
					<p>
						Total Salary $
						{topEmployList.reduce(
							(accumulator, currentValue) => accumulator + currentValue.salary,
							0
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
