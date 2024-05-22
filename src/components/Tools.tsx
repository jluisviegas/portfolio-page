import React from 'react';
import Slider from 'react-infinite-logo-slider';
import { skillsData } from '../Data';

const LogoSlider = () => {
	return (
		<div className="skills-wrapper">
			{skillsData.map((item) => (
				<div className="skills" key={item.id}>
					<img src={item.skill} alt={item.skills} />
				</div>
			))}
		</div>
	);
};
export default LogoSlider;
