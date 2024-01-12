import {
	motion as m,
	useAnimation,
	useScroll,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import projectsData from '../Data';
import { cardAnimated, itemAnimated } from '../animation';
import { useParallax } from '../layouts/Projects';
import { i18next as lng } from '../translate/i18n';

const boxVariant = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, y: -30 },
};

const ProjectCard = ({ num }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);
	return (
		<div className="projects-container container">
			<m.ul
				className="projects-list"
				ref={ref}
				variants={boxVariant}
				initial="hidden"
				animate={control}
			>
				{projectsData.map(
					({ id, image, title, github, description, stack, number, logo }) => {
						return (
							<li className="project-item">
								<div className="project-container">
									<div className="project-header">
										<img className="project-number" src={number}></img>
										<div className="project-logo">
											<img src={logo} alt="" />
										</div>
										{/* <a
											aria-label="instagram"
											href="https://instagram.com/luis_viegas"
											target="_blank"
											className="icon-project"
										>
											<i class="fa-brands fa-github"></i>
										</a> */}
									</div>
									<div className="project-content">
										<h5>
											<a href="">{title}</a>
										</h5>
										<p className="description">{description}</p>
										<p className="stack">{stack}</p>
									</div>
									<div className="project-image">
										<img className="image" src={image} alt="" />
										{/* logo */}
									</div>
								</div>
							</li>
						);
					}
				)}
			</m.ul>
		</div>
	);
};

export default ProjectCard;
