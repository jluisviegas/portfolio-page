import React from 'react';
import { i18next } from '../translate/i18n';

const I18N_KEY = 'i18nextLng';

const LanguageSelector = () => {
	const handleLanguageSwitch = (e) => {
		localStorage.setItem(I18N_KEY, e.target.id);
		window.location = window.location;
	};

	return (
		<div className="lng-switch">
			<ul>
				<li>
					<a
						className="ff-headers color-green"
						id="pt-BR"
						onClick={handleLanguageSwitch}
					>
						Portuguese
					</a>
				</li>

				<li>
					<a
						className="ff-headers color-green"
						id="en-US"
						onClick={handleLanguageSwitch}
					>
						English
					</a>
				</li>
			</ul>
		</div>
	);
};

export default LanguageSelector;
