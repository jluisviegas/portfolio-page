import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import projectsData from '../Data';
import { cardAnimated, itemAnimated } from '../animation';
import { useParallax } from '../layouts/Projects';
import { i18next as lng } from '../translate/i18n';

const ProjectCard = () => {
	const [activeItem, setActiveItem] = useState(3);
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end'],
	});

	const y = useParallax(scrollYProgress, 60);
	const yr = useParallax(scrollYProgress, -40);

	return (
		<div className="projects-container container-small">
			<ul className="projects-list">
				{projectsData.map(
					({ id, image, title, github, description, stack, number }) => {
						return (
							<m.li
								className="project"
								ref={ref}
								key={id}
								onClick={() => setActiveItem(id)}
								aria-current={activeItem === id}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0 }}
								variants={cardAnimated}
							>
								<div className="project-image">
									<img className="project-number" src={number}></img>

									<img className="image" src={image} alt="" />
									<div className="project-links">
										<a href={github} aria-label="GitHub Link">
											<FiGithub />
										</a>
									</div>
									<div className="project-content">
										<h5>
											<a href="">
												<i>{title}</i>
											</a>
										</h5>
										<p>{description}</p>
										<div className="project-tech">
											<small>{stack.lng1} ●</small>
											<small>{stack.lng2} ●</small>
											<small>{stack.lng3}</small>
										</div>
									</div>
								</div>
							</m.li>
						);
					}
				)}
			</ul>
		</div>
	);
};

export default ProjectCard;
