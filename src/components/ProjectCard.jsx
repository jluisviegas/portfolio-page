import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { Tilt } from 'react-tilt';
import projectsData from '../Data';
import { cardAnimated, defaultOptions, itemAnimated } from '../animation';
import { i18next as lng } from '../translate/i18n';
import Button from './Button';

const ProjectCard = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end'],
	});
	return (
		<div className="projects-container container ">
			{projectsData.map(({ id, image, title, github, description, stack }) => {
				return (
					<ul key={id} className="projects-list">
						<div
							className="project-bg"
							style={{ backgroundImage: `url(${image})` }}
						></div>
						<m.li
							className="project"
							ref={ref}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							variants={cardAnimated}
						>
							<div className="project-content">
								<h4 className="uppercase">
									<a href="">{title}</a>
								</h4>
								<h4>
									<i>{title}</i>
								</h4>
								<p>{description}</p>
								<div className="project-tech">
									<small>{stack.lng1}</small>
									<small>{stack.lng2}</small>
									<small>{stack.lng3}</small>
								</div>
							</div>
							<Tilt className="project-image" options={defaultOptions}>
								<img src={image} alt="" />
								<div className="project-links">
									<a href={github} aria-label="GitHub Link">
										<FiGithub />
									</a>
								</div>
							</Tilt>
						</m.li>
					</ul>
				);
			})}
		</div>
	);
};

export default ProjectCard;
