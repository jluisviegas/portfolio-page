import React from 'react';
import Slider from 'react-infinite-logo-slider';
import {
	astro,
	css,
	framer,
	html,
	javascript,
	mysql,
	next,
	prisma,
	react,
	sass,
	tailwind,
	typescript,
	wordpress,
} from '../assets/images';

const LogoSlider = () => {
	return (
		<div className="slide-wrapper">
			<Slider
				width="250px"
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
				<Slider.Slide>
					<img src={react} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={javascript} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={astro} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={prisma} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={mysql} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={wordpress} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={typescript} alt="any" className="logo-slider" />
				</Slider.Slide>
				<Slider.Slide>
					<img src={framer} alt="any" className="logo-slider" />
				</Slider.Slide>
			</Slider>
		</div>
	);
};

export default LogoSlider;
