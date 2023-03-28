import { motion as m } from 'framer-motion';
import React from 'react';

const Logo = () => {
	return (
		<div className="logo">
			<a href="#">
				<m.svg
					width="50"
					height="70"
					viewBox="0 0 55 90"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					initial={{ opacity: 0, scale: 0.5, x: -80 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{
						duration: 0.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<path
						d="M10.816 63.52H30.912V68H5.824V25.76H10.816V63.52Z"
						fill="white"
					/>
					<path
						d="M31.144 59.704H29.352L10.984 16.76H16.552L30.248 49.848L43.944 16.76H49.512L31.144 59.704Z"
						fill="#c5a47e"
					/>
				</m.svg>
			</a>
		</div>
	);
};

export default Logo;
