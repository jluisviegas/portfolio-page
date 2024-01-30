import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { itemAnimated, slideY } from '../animation';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from '../layouts/Projects';

const imgAnimation = {
	initial: { width: 0 },
	open: {
		width: 'auto',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { width: 0 },
};
const textAnimation = {
	initial: { opacity: 0 },
	open: {
		opacity: 1,
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { opacity: 0 },
};

const ProjectCard = ({ project }) => {
	const [isActive, setIsActive] = useState(false);
	const { title1, title2, src } = project;

	return (
		<div className="project-wrapper">
			<div
				onMouseEnter={() => {
					setIsActive(true);
				}}
				onMouseLeave={() => {
					setIsActive(false);
				}}
				className="project"
			>
				<p>{title1}</p>

				<m.div
					variants={imgAnimation}
					animate={isActive ? 'open' : 'closed'}
					className="imgContainer"
				>
					<img src={src}></img>
				</m.div>

				<p>{title2}</p>
			</div>
			<m.div
				className="project-text-view"
				variants={textAnimation}
				animate={isActive ? 'open' : 'closed'}
			>
				<p>View</p>
			</m.div>
		</div>
	);
};

export default ProjectCard;
