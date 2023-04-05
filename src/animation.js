export const cardAnimated = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'linear',
			duration: 1,
			staggerChildren: 0.5,
		},
	},
};

export const itemAnimated = {
	offscreen: { y: 20, opacity: 0 },
	onscreen: {
		y: 0,
		opacity: 1,
	},
};

export const wrapper = {
	offscreen: {
		y: 0,
	},
	onscreen: {
		y: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			staggerChildren: 0.2,
		},
	},
};

export const blinder = {
	offscreen: { y: 0 },
	onscreen: {
		y: -1000,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};
