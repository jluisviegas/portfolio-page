import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { skillsData } from '../Data';
import { skills } from '../assets/images';
import LogoSlider from '../components/Slider';
import Socials from '../components/Socials';
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
				<div className="big-header">
					About <i>Me</i>
				</div>
			</m.div>

			<div className="about-container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description container">
						<div className="content-left-col">
							<small> &lt;p&gt; Hi, There! &lt;/p&gt; </small>
							<h3 className="text-right">
								My name is <span>Luis Viegas</span>, Brazilian
								<span> Web Developer </span>
								devoted to the craft of <span>building websites</span> and
								create enjoyable experiences.
							</h3>
						</div>

						<div className="content-right-col">
							<p>
								Welcome to my professional journey! I hold an MBA with a
								specialization in Business and Marketing, and my career has been
								a dynamic blend of impactful roles in both the private and
								public sectors. Throughout my tenure in the vibrant city of São
								Luis - MA, I've consistently taken on management positions and
								leadership roles, where I've garnered recognition for developing
								strategic plans that optimize productivity and enhance
								organizational effectiveness. My ability to innovate processes
								and drive positive change has been a consistent theme in my
								professional endeavors.
							</p>
							<p>
								In a recent chapter of my career, I embraced a transformative
								experience by relocating to Vancouver, CA, where I delved into
								the realm of Information Technology. This marked the beginning
								of my pursuit of a passion long harbored – Web Development. This
								immersive experience not only broadened my technological skill
								set but also significantly contributed to refining my
								proficiency in the English language.
							</p>

							<p>
								Technology has always been a driving force in my professional
								narrative, and my passion lies particularly in full-stack
								software development, project management, and slowly getting
								into UI/UX design. I firmly believe in the philosophy of placing
								humanity at the center of technology. This ethos not only guides
								my approach to development but also underscores my commitment to
								fostering positive, user-centric solutions.
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
