import { motion } from 'framer-motion';
import * as React from 'react';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector';
import Socials from '../Socials';
import { MenuItem } from './MenuItem';

const variants = {
	open: {
		opacity: 1,
		visibility: 'visible',
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
			delay: 0.2,
		},
	},
	closed: {
		opacity: 0,
		visibility: 'hidden',
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = ({ toggle }) => (
	<motion.ul variants={variants}>
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
