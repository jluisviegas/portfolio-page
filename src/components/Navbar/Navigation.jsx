import { motion } from 'framer-motion';
import { navItemsList } from '../../animation';
import Button from '../Button';
import Socials from '../Socials';
import { MenuItem } from './MenuItem';

export const Navigation = ({ toggle }) => (
	<motion.ul variants={navItemsList} className="mobile-nav-list">
		{itemIds.map((i) => (
			<a href={i.url} onClick={toggle}>
				<MenuItem i={i.id} key={i.id} name={i.link} />
			</a>
		))}
	</motion.ul>
);

const itemIds = [
	{ id: 0, link: 'About', url: '#about-section' },
	{ id: 1, link: 'Projects', url: '#portfolio-section' },
	{ id: 2, link: 'Contact', url: '#contact-section' },
];
