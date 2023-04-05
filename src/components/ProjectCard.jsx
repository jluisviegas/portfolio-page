import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import projectsData from '../Data';
import { cardAnimated, itemAnimated } from '../animation';
import { i18next as lng } from '../translate/i18n';
import Button from './Button';

const ProjectCard = () => {
	return (
		<div className="projects-container container ">
			{projectsData.map(({ id, image, title, github, description, stack }) => {
				return (
					<ul key={id} className="projects-list">
						<div
							className="project-bg"
							style={{ backgroundImage: `url(${image})` }}
						></div>
						<li className="project">
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
							<div className="project-image">
								<img src={image} alt="" />
								<div className="project-links">
									<a href={github} aria-label="GitHub Link">
										<FiGithub />
									</a>
								</div>
							</div>
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default ProjectCard;
