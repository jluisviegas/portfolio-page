export const cardAnimated = {
	open: {
		opacity: 1,
		scale: 1,
		transition: {
			staggerChildren: 1,
			duration: 2,
		},
	},
	closed: {
		opacity: 0,
		scale: 0.98,
		transition: {},
	},
};

export const itemAnimated = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	closed: { y: 20, opacity: 0 },
};
