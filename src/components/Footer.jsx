import React from 'react';
import { i18next as lng } from '../translate/i18n';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="separator container-small"></div>
			<div className="footer-main">
				<div className="footer-logo">
					<Logo />
				</div>
			</div>
			<small>
				&copy; 2023 <i> Luis Viegas</i>. {lng.t('footer.rights')}
			</small>
		</footer>
	);
};

export default Footer;
