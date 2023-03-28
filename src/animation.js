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
			staggerChildren: 0.4,
			delay: 1,
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
