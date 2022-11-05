import React from 'react';
import './style.css';

const Button = ({ name, href, type }) => {
	return (
		<a href={href} download>
			<button type={type} className="fs-300 relative btn ff-headers">
				{name}
			</button>
		</a>
	);
};

export default Button;
