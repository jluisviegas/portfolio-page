import { motion as m, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { skillsData } from '../Data';
import { skills } from '../assets/images';
import { i18next as lng } from '../translate/i18n';

const About = () => {
	return (
		<section className="about-section" id="about-section">
			{/* Section Header */}

			<div className="separator"></div>

			<div className="about-container">
				{/* About Descriprion */}
				<div className="about-content container">
					<div className="about-description">
						<p className="left-col">
							<span>{lng.t('description.span1')}</span>
							{lng.t('description.about1')}
						</p>
						<div className="separator container-small text-left"></div>

						<p className="right-col">
							{lng.t('description.about2')}
							<span>{lng.t('description.span2')}</span>
							{lng.t('description.about3')}
						</p>
					</div>
				</div>

				{/* Skill Icons */}

				<div className="language-cards container">
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
