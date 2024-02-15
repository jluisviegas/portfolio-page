import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { card1, card2, card3, card4 } from '../assets/images';
import ProjectCard from '../components/ProjectCard';

const projects = [
	{
		title1: 'Development / Design / 2024',
		title2: 'Gabi Pães',
		src: card3,
		color: '#d7b13a',
	},

	{
		title1: 'Development / Design / 2024',
		title2: 'Nery',
		src: card2,
		color: '#111',
	},

	{
		title1: 'Development / Design / 2023',
		title2: 'Maia',
		src: card1,
		color: '#111',
	},

	{
		title1: 'Development / Design / 2024',
		title2: 'Page',
		src: card4,
		color: '#111',
	},
];

export const useParallax = (value, distance) => {
	return useTransform(value, [0, 1], [-distance, distance]);
};

const Projects = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
	const y = useParallax(scrollYProgress, 80);

	return (
		<m.section
			className=""
			id="project-section"
			ref={sectionRef}
			style={{
				opacity: opacitySection,
			}}
		>
			{/* Section Header */}
			<m.div className="section-header">
				<div className="big-header right">Projects</div>
			</m.div>
			<div className="projects-page">
				<div className="projects-container container">
					{projects.map((project) => {
						return <ProjectCard project={project} />;
					})}
				</div>
			</div>
		</m.section>
	);
};

export default Projects;
