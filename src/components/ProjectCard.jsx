import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { itemAnimated, projectStaggared, slideY } from '../animation';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from '../layouts/Projects';

const anim = {
	initial: { width: 0 },
	open: {
		width: 'auto',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { width: 0 },
};

const textAnimation = {
	initial: { marginLeft: 0 },
	open: {
		marginLeft: '1.5rem',
		transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
	},
	closed: { marginLeft: 0 },
};

const ProjectCard = ({ project }) => {
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
				<p className="project-desc">{title1}</p>
				<m.p variants={textAnimation} animate={isActive ? 'open' : 'closed'}>
					{title2}
				</m.p>
			</div>

			<m.div
				variants={anim}
				animate={isActive ? 'open' : 'closed'}
				className="imgContainer"
			>
				<img src={src}></img>
			</m.div>
		</m.div>
	);
};

export default ProjectCard;
