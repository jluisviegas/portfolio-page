import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { skillsData } from '../Data';
import { skills } from '../assets/images';
import ME from '../assets/images/me.png';

import { i18next as lng } from '../translate/i18n';

const About = () => {
	return (
		<section className="about-section" id="about-section">
			{/* Section Header */}

			<div className="about-container">
				{/* About Descriprion */}
				<div className="about-content container">
					<div className="about-description container">
						<div className="content-left-col">
							<div className="image-header">
								<img src={ME} alt="Luis Viegas" />
							</div>
							<small>
								<a href="mailto: jluisviegas@hotmail.com" target="_blank">
									Resume
									<FiArrowUpRight />
								</a>
							</small>
						</div>

						<div className="content-right-col">
							<small>Luis Viegas</small>
							<h3 className="text-right">
								Sobre
								<i> Mim!</i>
							</h3>
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

				<div className="language-cards container-small">
					<div className="skills">
						<img src={skills} alt="" className="rotating " />
					</div>
					{skillsData.map((skill) => (
						<div className="language-card" key={skill.id}>
							<img src={skill.skill} alt="" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
