import { motion as m } from 'framer-motion';
import React from 'react';

const Logo = ({ size }) => {
	return (
		<m.div
			className="logo"
			whileHover={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 200, bounce: 0.3 }}
		>
			<a href="#">
				<m.svg
					width={`${size}`}
					height={`${size}`}
					viewBox="0 0 27 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					initial={{ opacity: 0, scale: 0.5, y: -50 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						type: 'spring',
						// duration: 0.8,
						stiffness: 200,
						restDelta: 2,
						// ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<path
						d="M3.87525 18.8571H10.5L11.5 22H0V0L3.87525 1V18.8571Z"
						fill="#f1efe9"
					/>

					<path
						d="M15.3282 22.1111L4.5 1.11111L9 0.111112L12 6.61111L15.3282 13.5L19 6.61111L22 0.111112L27 1.11111L15.3282 22.1111Z"
						fill="#3D3941"
					/>
					<path
						d="M25 20C25 21.1046 24.1046 22 23 22C21.8954 22 21 21.1046 21 20C21 18.8954 21.8954 18 23 18C24.1046 18 25 18.8954 25 20Z"
						fill="#3D3941"
					/>
				</m.svg>
			</a>
		</m.div>
	);
};

export default Logo;
