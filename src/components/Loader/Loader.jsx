import React from 'react';
import './style.css';

const Loader = () => {
	return (
		<div class="loading">
			<svg
				width="55"
				height="70"
				viewBox="0 0 55 70"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.816 63.52H30.912V68H5.824V25.76H10.816V63.52Z"
					fill="white"
				/>
				<path
					d="M31.144 59.704H29.352L10.984 16.76H16.552L30.248 49.848L43.944 16.76H49.512L31.144 59.704Z"
					fill="#01C380"
				/>
			</svg>
		</div>
	);
};

export default Loader;
