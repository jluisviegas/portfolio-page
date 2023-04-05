import {
	motion as m,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { i18next as lng } from '../translate/i18n';

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const Projects = () => {
	const hRef = useRef(null);
	const hInView = useInView(hRef, { once: false });

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<section className="relative" id="portfolio-section">
			{/* Section Header */}
			<m.div
				className="section-header"
				ref={hRef}
				style={{
					transform: hInView ? 'none' : 'translateY(50px)',
					opacity: hInView ? 1 : 0,
					transition:
						'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
				}}
			>
				<div className="big-header right">{lng.t('headers.projects')}</div>
			</m.div>
			<ProjectCard />
			<m.div className="progress" style={{ scaleX }} />
		</section>
	);
};

export default Projects;
