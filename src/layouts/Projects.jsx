import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { cardAnimated, itemAnimated } from '../animation';
import projectsData from '../Data';
import { i18next as lng } from '../translate/i18n';

const Projects = () => {
	const hRef = useRef(null);
	const mRef = useRef(null);
	const hInView = useInView(hRef, { once: false });

	return (
		<section className="relative" id="portfolio-section">
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
				<h2 className="container text-right">
					{lng.t('headers.projects')} <div className="separator"></div>
				</h2>
				<div className="big-header text-right">{lng.t('headers.projects')}</div>
			</m.div>

			{/* Projects */}
			<div className="projects-container container-small ">
				{projectsData.map(
					({ id, image, title, github, description, stack, number }) => {
						return (
							<m.ul
								key={id}
								className="projects-list"
								ref={mRef}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0 }}
								variants={cardAnimated}
							>
								<li className="project">
									<img src={number} className="number-svg"></img>
									<m.div
										className="project-image"
										style={{ backgroundImage: `url(${image})` }}
										variants={itemAnimated}
									></m.div>

									<m.div className="project-content" variants={itemAnimated}>
										<h4>
											<a href="">{title}</a>
										</h4>
										<p>{description}</p>
										<div className="project-tech">
											<small>{stack.lng1}</small>
											<small>{stack.lng2}</small>
											<small>{stack.lng3}</small>
										</div>
									</m.div>

									{/* External Links */}
									<div className="project-links">
										<a href={github} aria-label="GitHub Link">
											<FiGithub />
										</a>
										<a href={github} aria-label="External Link">
											<BsArrowUpRightSquare />
										</a>
									</div>
								</li>
							</m.ul>
						);
					}
				)}
			</div>
		</section>
	);
};

export default Projects;
