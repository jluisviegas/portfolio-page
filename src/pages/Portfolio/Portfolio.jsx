import React from 'react';
import { i18next as lng } from '../../translate/i18n';
import data from './Data';

import './style.css';

const Portfolio = () => {
	return (
		<section className="portfolio color-bg-bege" id="portfolio-section">
			<h2 className="ff-primary fw-300 uppercase center color-matte">
				{lng.t('headers.portfolio')}
			</h2>
			<div className="portfolio-text color-variant">
				{lng.t('headers.portfolio')}
			</div>

			<div className="container portfolio-container">
				{data.map(({ id, image, title, github, description, stack }) => {
					return (
						<article key={id} className="portfolio-item">
							<div
								className="card"
								style={{ backgroundImage: `url(${image})` }}
							>
								<div className="card-content">
									<h3 className="card-title ff-headers fs-400 uppercase">
										{title}
									</h3>
									<p className="card-body fs-300">{description}</p>
									<div className="card-stack">
										<img src={stack.img1} alt="" />
										<img src={stack.img2} alt="" />
									</div>

									<a href={github} className="btn fs-300">
										<i className="fa-brands fa-github"></i>
									</a>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
