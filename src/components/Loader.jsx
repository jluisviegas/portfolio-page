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
				width="55"
				height="70"
				viewBox="0 0 55 70"
				xmlns="http://www.w3.org/2000/svg"
				className="item"
			>
				<m.path
					d="M10.816 63.52H30.912V68H5.824V25.76H10.816V63.52Z"
					variants={icon}
					initial="hidden"
					animate="visible"
					transition={{
						default: { duration: 3.5, ease: 'easeInOut' },
						fill: { duration: 3, ease: [1, 0, 0.8, 1] },
					}}
				/>
				<m.path
					d="M31.144 59.704H29.352L10.984 16.76H16.552L30.248 49.848L43.944 16.76H49.512L31.144 59.704Z"
					variants={icon}
					initial="hidden"
					animate="visible"
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
