import React from 'react';

const Socials = ({ className }) => {
	return (
		<div>
			<ul className={`${className}`}>
				<li className="icon-item">
					<a
						aria-label="email"
						href="mailto: jlviegass@hotmail.com"
						target="_blank"
						className="icon-link"
					>
						<i class="fa-solid fa-envelope"></i>
					</a>
				</li>
				<li className="icon-item">
					<a
						aria-label="instagram"
						href="https://instagram.com/luis_viegas"
						target="_blank"
						className="icon-link"
					>
						<i className="fab fa-instagram"></i>
					</a>
				</li>
				<li className="icon-item">
					<a
						aria-label="github"
						href="https://github.com/jluisviegas"
						target="_blank"
						className="icon-link"
					>
						<i className="fa-brands fa-github"></i>
					</a>
				</li>
				<li className="icon-item">
					<a
						aria-label="linkedin"
						href="https://linkedin.com/jluisviegas"
						target="_blank"
						className="icon-link"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
