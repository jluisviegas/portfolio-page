import React from 'react';
import Slider from 'react-infinite-logo-slider';
import { css, html, next, sass, tailwind } from '../assets/images';

const LogoSlider = () => {
	return (
		<div className="slide-wrapper">
			<Slider
				width="300px"
				duration={40}
				pauseOnHover={true}
				blurBorders={true}
				blurBoderColor={'#101019'}
			>
				<Slider.Slide>
					<img src={tailwind} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={next} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={html} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={css} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={sass} alt="any" className="logo-slider" />
				</Slider.Slide>
			</Slider>
		</div>
	);
};

export default LogoSlider;
