import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { skillsData } from '../Data';
import { skills } from '../assets/images';
import LogoSlider from '../components/Slider';
import { i18next as lng } from '../translate/i18n';
import { useParallax } from './Projects';

const About = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0.2, 1]);
	const y = useParallax(scrollYProgress, -60);

	return (
		<m.section
			className="about-section"
			id="about-section"
			ref={sectionRef}
			style={{
				opacity: opacitySection,
				y,
			}}
		>
			{/* Section Header */}
			<m.div className="section-header" style={{ y }}>
				<div className="big-header">{lng.t('headers.about')}</div>
			</m.div>

			<div className="about-container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description container">
						<div className="content-left-col">
							<small> Hello! </small>
							<h3 className="text-right">
								My name is
								<i> Luis Viegas</i>
							</h3>
							<h3 className="text-right">
								I am a<i>Web Developer</i>
							</h3>
						</div>

						<div className="content-right-col">
							<p>
								<span>{lng.t('description.span1')}</span>
								{lng.t('description.about1')}
							</p>
							<p>
								{lng.t('description.about2')}
								<span>{lng.t('description.span2')}</span>
								{lng.t('description.about3')}
							</p>
						</div>
					</div>
				</div>

				{/* Skill Icons */}
			</div>
			<LogoSlider />
		</m.section>
	);
};

export default About;
