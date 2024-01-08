import React from 'react';
import { i18next as lng } from '../translate/i18n';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
	return (
		<footer className="footer relative">
			<div className="footer-main container">
				<div className="footer-logo mobile-display">
					<Logo size="30" />
					<p>© 2024 | Designed & Developed by Luis Viegas</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
