import React from 'react';
import { i18next as lng } from '../../translate/i18n';
import Logo from '../Logo/Logo';
import SocialMedia from '../SocialMedia/SocialMedia';

import './style.css';

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="footer-logo">
				<Logo />
			</div>
			<div className="mobile-social">
				<SocialMedia />
			</div>

			<div className="fs-300 color-bege">
				<small>
					&copy; 2022 <span className="color-accent">Luis Viegas.</span>
					<br />
					{lng.t('footer.rights')}
				</small>
			</div>
		</footer>
	);
};

export default Footer;
