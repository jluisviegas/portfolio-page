import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { i18next as lng } from '../translate/i18n';

export const useParallax = (value, distance) => {
	return useTransform(value, [0, 1], [-distance, distance]);
};

const Projects = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0.2, 1]);
	const y = useParallax(scrollYProgress, 80);

	return (
		<m.section
			className="relative"
			id="portfolio-section"
			ref={sectionRef}
			style={{
				opacity: opacitySection,
				y,
			}}
		>
			{/* Section Header */}
			<m.div className="section-header" style={{ y }}>
				<div className="big-header right">{lng.t('headers.projects')}</div>
			</m.div>
			<ProjectCard />
		</m.section>
	);
};

export default Projects;
