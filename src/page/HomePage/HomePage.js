import React, { useState } from "react";
import "./home-page.style.css";
import Profile from "../../components/Profile/Profile";
import Statistics from "../../components/Statistics/Statistics";
import fakeData from "../../assest/fakeData";
const shuffled = fakeData.sort(() => Math.random() - 0.5);

const HomePage = () => {
	const [peoples] = useState(shuffled);
	const [topEmploy, setTopEmploy] = useState([]);
	const addEventHandler = (people) => {
		const newAdd = [...topEmploy, people];
		const removeDuplicate = newAdd.filter(function(item, index) {
			return newAdd.indexOf(item) === index;
		});
		setTopEmploy(removeDuplicate);
	};
	return (
		<div className="home-page">
			<Statistics topEmployList={topEmploy} />
			<div className="peoples">
				<div className="profiles">
					{peoples.map((people, i) => (
						<Profile
							key={i}
							people={people}
							addEventHandler={addEventHandler}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
