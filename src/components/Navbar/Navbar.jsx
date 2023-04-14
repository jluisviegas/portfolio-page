import { motion as m, useCycle } from 'framer-motion';
import * as React from 'react';
import { useRef } from 'react';
import { i18next as lng } from '../../translate/i18n';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
	open: {
		scale: 80,
		background: '#DCDDE1',
		transition: {
			type: 'spring',
			stiffness: 40,
			restDelta: 2,
		},
	},
	closed: {
		scale: 1,
		borderRadius: '50%',
		background: '#ff003b',
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 50,
		},
	},
};

const Nav = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	isOpen
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto');

	return (
		<m.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			ref={containerRef}
			className="relative"
		>
			<m.div className="background" variants={sidebar} />
			<Navigation toggle={() => toggleOpen()} />
			<MenuToggle toggle={() => toggleOpen()} />
		</m.nav>
	);
};

export default Nav;
