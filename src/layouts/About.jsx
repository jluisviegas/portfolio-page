import { motion as m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../assets/images';
import { skillsData } from '../Data';
import { i18next as lng } from '../translate/i18n';

const About = () => {
	const hRef = useRef(null);
	const hInView = useInView(hRef, { once: false });

	return (
		<section className="relative" id="about-section">
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
				<h2 className="container">
					{lng.t('headers.about')}
					<div className="separator"></div>
				</h2>
				<div className="big-header">{lng.t('headers.about')}</div>
			</m.div>

			<div className="container about-container">
				{/* About Descriprion */}
				<div className="about-content">
					<div className="about-description">
						<p>
							<span>{lng.t('description.span1')}</span>
							{lng.t('description.about1')}
						</p>
						<p>
							{lng.t('description.about2')}
							<span>{lng.t('description.span2')}</span>
							{lng.t('description.about3')}
							<span>{lng.t('description.span3')}</span>
							{lng.t('description.about4')}
						</p>
					</div>
				</div>

				{/* Skill Icons */}

				<div className="language-cards">
					<div className="skills">
						<img src={skills} alt="" className="rotating " />
					</div>
					{skillsData.map((skill) => (
						<div className="language-card" key={skill.id}>
							<img src={skill.skill} alt="" />
							{/* <small>{skill.title}</small> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
