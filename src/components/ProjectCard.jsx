import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import projectsData from '../Data';
import { cardAnimated, itemAnimated } from '../animation';
import { useParallax } from '../layouts/Projects';
import { i18next as lng } from '../translate/i18n';

const ProjectCard = () => {
	return (
		<div className="projects-container container">
			<ul className="projects-list">
				{projectsData.map(
					({ id, image, title, github, description, stack, number, logo }) => {
						return (
							<li className="project-item">
								<div className="project-container">
									<div className="project-header">
										<img className="project-number" src={number}></img>
										<a
											aria-label="instagram"
											href="https://instagram.com/luis_viegas"
											target="_blank"
											className="icon-project"
										>
											<i class="fa-brands fa-github"></i>
										</a>
									</div>
									<div className="project-image">
										<img className="image" src={image} alt="" />
										{/* logo */}
										<div className="project-logo">
											<img src={logo} alt="" />
										</div>
										<div className="project-content">
											<h5>
												<a href="">{title}</a>
											</h5>
											<p>{description}</p>
											<div className="project-tech">
												<small>{stack.lng1} ●</small>
												<small>{stack.lng2} ●</small>
												<small>{stack.lng3}</small>
											</div>
										</div>
									</div>
								</div>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
};

export default ProjectCard;
