import React from 'react';

const Button = ({ name, href, type, className }) => {
	return (
		<a href={href} download>
			<button type={type} className={`relative ${className}`}>
				{name}
			</button>
		</a>
	);
};

export default Button;
