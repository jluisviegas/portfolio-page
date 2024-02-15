export const slideRightY = {
	open: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 0.8,
		},
	},
	closed: {
		opacity: 0,
	},
};

export const slideLeftY = {
	open: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
		},
	},
	closed: {
		opacity: 0,
		x: -600,
	},
};

export const slideY = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 1,
			duration: 0.7,
		},
	},
	closed: {
		opacity: 0,
		y: 50,
	},
};

export const itemAnimated = {
	open: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
	closed: { y: -50, scale: 0.5, opacity: 0 },
};

export const spring = {
	type: 'spring',
	damping: 10,
	stiffness: 100,
};

export const projectStaggared = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
			ease: [0.8, 1, 0.8, 1],
		},
	}),
};

export const navItemsList = {
	open: {
		opacity: 1,
		visibility: 'visible',
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
			delay: 0.2,
		},
	},
	closed: {
		opacity: 0,
		visibility: 'hidden',
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
