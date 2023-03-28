import { motion as m } from 'framer-motion';
import { i18next as lng } from '../../translate/i18n';
import Button from '../Button';

const Nav = () => {
	return (
		<>
			<m.nav
				className="desktop-menu"
				initial={{ opacity: 0, scale: 0.5, y: -80 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<ul>
					<li>
						<a href="#">{lng.t('nav.about')}</a>
					</li>
					<li>
						<a href="#about-section">{lng.t('nav.about')}</a>
					</li>
					<li>
						<a href="#portfolio-section">{lng.t('nav.projects')}</a>
					</li>
					<Button name="Resume" className="btn-light" />
				</ul>
			</m.nav>
		</>
	);
};

export default Nav;
