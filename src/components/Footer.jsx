import React from 'react';
import { i18next as lng } from '../translate/i18n';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-main container">
				<div className="footer-logo">
					<Logo />
				</div>

				<div className="footer-links">
					<p className="mobile-display">Social</p>
					<ul className="footer-social">
						<li>
							<small> LinkedIn</small>
						</li>
						<li>
							<small>Instagram</small>
						</li>
						<li>
							<small>GitHub</small>
						</li>
					</ul>
				</div>
			</div>

			<div className="container">
				<div className="separator"></div>
				<small>
					&copy; 2023 <i> Luis Viegas</i>. {lng.t('footer.rights')}
				</small>
			</div>
		</footer>
	);
};

export default Footer;
