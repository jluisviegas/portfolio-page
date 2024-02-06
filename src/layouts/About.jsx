import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { skillsData } from '../Data';
import { itemAnimated, slideLeftY, slideRightY } from '../animation';
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
	const y = useParallax(scrollYProgress, 100);
	const x = useParallax(scrollYProgress, 60);

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
			<m.div className="section-header right" style={{ y }}>
				<div className="big-header ">About Me</div>
			</m.div>

			<div className="about-container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description container">
						<div className="content-left-col">
							<m.div
								className="content-left"
								ref={ref}
								variants={slideLeftY}
								initial="closed"
								animate={control}
							>
								<img src={luis_about} alt="Luis" width={400} height={500} />
							</m.div>
						</div>

						<m.div
							className="content-right-col"
							ref={ref}
							variants={slideRightY}
							initial="closed"
							animate={control}
						>
							<div className="about-text">
								<p>
									Welcome to my professional journey! I hold an MBA with a
									specialization in Business and Marketing, and my career has
									been a dynamic blend of impactful roles in both the private
									and public sectors. Throughout my carrer, I've consistently
									taken on management positions and leadership roles, where I've
									garnered recognition for developing strategic plans that
									optimize productivity and enhance organizational
									effectiveness.
								</p>
								<p>
									In a recent chapter of my career, I embraced a transformative
									experience by relocating to Vancouver, CA, where I dived into
									Information Technology. This marked the beginning of my
									pursuit of a passion long harbored – Web Development.
								</p>

								<p>
									Technology has always been a driving force in my professional
									narrative, and my passion lies particularly in full-stack
									software development, project management, and slowly getting
									into UI/UX design.
								</p>
							</div>
							<div className="about-links-arrow flex">
								<div className="about-links">
									<div className="about-email">
										<p>JLVIEGASS@GMAIL.COM</p>
									</div>
									<p>RESUMÉ</p>
									<p>LINKEDIN</p>
									<p>GITHUB</p>
									<p>INSTAGRAM</p>
								</div>
								{/* <div>
									<m.a
										href="#project-section"
										className="arrow-wrapper"
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
									>
										<IoMdArrowDown />
									</m.a>
								</div> */}
							</div>
						</m.div>
					</div>
				</div>
			</div>
			<LogoSlider />
		</m.section>
	);
};

export default About;
