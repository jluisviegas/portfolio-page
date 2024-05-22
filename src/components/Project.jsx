import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { FiArrowDownRight, FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { itemAnimated, projectStaggared, slideY } from '../animation';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from '../layouts/Projects';

const widthAnim = {
	initial: { width: 0, height: 0 },
	open: {
		width: 'auto',
		// height: 'auto',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { width: 0, height: 0 },
};

export const heightAnim = {
	initial: { height: 0 },
	open: {
		height: 'auto',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { height: 0 },
};

const textAnimation = {
	initial: { marginLeft: 0 },
	open: {
		marginLeft: '1.5rem',
		color: '#C5A47E',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { marginLeft: 0 },
};

const Project = ({ project }) => {
	const [isActive, setIsActive] = useState(false);
	const { title1, title2, src, index } = project;

	return (
		<m.div
			onMouseEnter={() => {
				setIsActive(true);
			}}
			onMouseLeave={() => {
				setIsActive(false);
			}}
			className="project"
			variants={projectStaggared}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
		>
			<div className="project-info">
				<div className="project-description">
					<p>03</p>
					<p>{title1}</p>
				</div>
				<div className="project-title">
					<m.h2 variants={textAnimation} animate={isActive ? 'open' : 'closed'}>
						{title2}
					</m.h2>
					<FiArrowDownRight />
				</div>
			</div>

			<m.div
				variants={widthAnim}
				animate={isActive ? 'open' : 'closed'}
				className="imgContainer"
			>
				<img src={src}></img>
			</m.div>
		</m.div>
	);
};

export default Project;
