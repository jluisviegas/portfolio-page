import { motion } from 'framer-motion';
import * as React from 'react';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		visibility: 'visible',
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		visibility: 'hidden',
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export const MenuItem = ({ name }) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1, textDecoration: 'line-through' }}
			transition={{ type: 'spring' }}
			whileTap={{ scale: 0.95 }}
		>
			<div className="section-link">{name}</div>
		</motion.li>
	);
};
