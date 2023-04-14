import {
	animate,
	motion as m,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import { useEffect } from 'react';

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: 'rgb(6, 6, 10)',
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: 'rgb(16, 16, 25)',
	},
};

const Loader = ({ loading }) => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);

	useEffect(() => {
		const animation = animate(count, 100, { duration: 4 });

		return animation.stop;
	}, []);
	return (
		<div className="loading">
			<m.svg
				width="150"
				height="150"
				viewBox="0 0 150 150"
				xmlns="http://www.w3.org/2000/svg"
				className="item"
			>
				<m.path
					d="M3.87525 18.8571H10.5L11.5 22H0V0L3.87525 1V18.8571Z"
					variants={icon}
					initial="hidden"
					animate="visible"
					transition={{
						default: { duration: 3.5, ease: 'easeInOut' },
						fill: { duration: 3, ease: [1, 0, 0.8, 1] },
					}}
				/>
				<m.path
					d="M15.3282 22.1111L4.5 1.11111L9 0.111112L12 6.61111L15.3282 13.5L19 6.61111L22 0.111112L27 1.11111L15.3282 22.1111Z"
					variants={icon}
					initial="hidden"
					animate="visible"
					transition={{
						default: { duration: 4, ease: 'easeInOut' },
						fill: { duration: 4, ease: [1, 0, 0.8, 1] },
					}}
				/>
				<m.path
					d="M25 20C25 21.1046 24.1046 22 23 22C21.8954 22 21 21.1046 21 20C21 18.8954 21.8954 18 23 18C24.1046 18 25 18.8954 25 20Z"
					variants={icon}
					initial="hidden"
					animate="visible"
					fill="#c5a47e"
					transition={{
						default: { duration: 4, ease: 'easeInOut' },
						fill: { duration: 4, ease: [1, 0, 0.8, 1] },
					}}
				/>
			</m.svg>
			<m.small>{rounded}</m.small>
		</div>
	);
};

export default Loader;
