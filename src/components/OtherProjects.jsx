import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { card1 } from '../assets/images';
import { heightAnim } from '../components/Project';

const OtherProjects = ({ otherProjects }) => {
	const [isActive, setIsActive] = useState(false);
	const { title1, title2, src, index } = otherProjects;
	console.log(title1);

	return (
		<div className="container">
			<h3 className="right">OTHER PROJECTS</h3>
			<div className="secondary-project-container">
				<m.div
					className="secondary-project"
					onMouseEnter={() => {
						setIsActive(true);
					}}
					onMouseLeave={() => {
						setIsActive(false);
					}}
				>
					<h5>Expense Tracker</h5>
					<p>React | Firebase</p>
					<m.div
						variants={heightAnim}
						animate={isActive ? 'open' : 'closed'}
						className="secondary-image"
					>
						<img src={card1}></img>
					</m.div>
				</m.div>
			</div>
		</div>
	);
};

export default OtherProjects;
