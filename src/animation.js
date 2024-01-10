export const cardAnimated = {
	offscreen: {
		y: 80,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'linear',
			duration: 0.7,
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

export const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 50, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 500, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};
