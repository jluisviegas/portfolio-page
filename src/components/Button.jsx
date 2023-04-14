import React from 'react';

const Button = ({ name, href, type, className }) => {
	return (
		<a href={href} download>
			<button type={type} className={` ${className}`}>
				<span class="button-text">{name}</span>
				<div class="fill-container"></div>
			</button>
		</a>
	);
};

export default Button;
