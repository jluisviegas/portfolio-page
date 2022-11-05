import React, { useRef } from 'react';
import { i18next as lng } from '../../translate/i18n';
import Button from '../Button/Button';

import './style.css';

const Nav = () => {
	return (
		<>
			<nav className="desktop-menu ff-text relative fs-400">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about-section">{lng.t('nav.about')}</a>
					</li>
					<li>
						<a href="#portfolio-section">{lng.t('nav.portfolio')}</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
