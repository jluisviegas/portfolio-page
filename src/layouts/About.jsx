import {
	motion as m,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from 'framer-motion';
import { skillsData } from '../Data';
import { skills } from '../assets/images';
import { i18next as lng } from '../translate/i18n';

const About = () => {
	const { scrollYProgress } = useScroll();
	const scrollVelocity = useVelocity(scrollYProgress);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return (
		<section className="about-section" id="about-section">
			{/* Section Header */}

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

				<div className="section-header">
					<div className="big-header right">{lng.t('headers.projects')}</div>
				</div>

				{/* Skill Icons */}

				<div className="language-cards container">
					<div className="skills">
						<img src={skills} alt="" className="rotating " />
					</div>
					{skillsData.map((skill) => (
						<m.div className="language-card" key={skill.id} style={{ x: x }}>
							<img src={skill.skill} alt="" />
						</m.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
