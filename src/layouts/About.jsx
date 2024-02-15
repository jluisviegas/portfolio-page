import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { skillsData } from '../Data';
import { itemAnimated, slideRightY, slideY } from '../animation';
import { luis_about } from '../assets/images';
import LogoSlider from '../components/Slider';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from './Projects';

const About = () => {
	const { ref, control } = useInViewAnimation();

	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

	return (
		<m.section
			className="about-section"
			id="about-section"
			ref={sectionRef}
			style={{
				opacity: opacitySection,
			}}
			initial="closed"
			whileInView="open"
			variants={slideY}
		>
			{/* Section Header */}
			<m.div className="section-header">
				<div className="big-header ">About Me</div>
			</m.div>

			<div className="about-container container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description">
						<div className="content-left-col">
							<div className="content-left">
								<img src={luis_about} alt="Luis" />
							</div>
						</div>

						<div className="content-right-col">
							<div className="about-text">
								<p>
									With an MBA specializing in Business and Marketing, Luis
									Viegas has navigated a dynamic career spanning both private
									and public sectors. Known for assuming management and
									leadership roles, he has earned recognition for crafting
									strategic plans that optimize productivity and bolster
									organizational effectiveness. Moving to Vancouver (CA) for a
									while, was a turning point for him, sparking a newfound
									interest in Information Technology, particularly web
									development. Technology has always been a driving force in his
									career, with a focus on building websites, managing projects,
									and developing an interest in making user-friendly designs.
								</p>
								<p>
									Take a look at my <a href="">Resume</a> and feel free to
									contact me <a href="">jlviegass@gmail.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<LogoSlider />
		</m.section>
	);
};

export default About;
