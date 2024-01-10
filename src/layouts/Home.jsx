import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { Tilt } from 'react-tilt';
import { defaultOptions } from '../animation';
import CV from '../assets/images/cv.pdf';
import ME from '../assets/images/me-about.jpg';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Nav from '../components/Navbar/Navbar';
import { HeroSlider } from '../components/Slider';
import { i18next as lng } from '../translate/i18n';

const Home = () => {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
	const xr = useTransform(scrollYProgress, [0, 0.9], [0, 900]);

	return (
		<>
			<main className="hero-section relative" id="#">
				{/* Header */}
				<header className="header container">
					<Logo size="50" />
					<m.div
						className="nav-links"
						initial={{ opacity: 0, scale: 0.5, y: -50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
					>
						<Button className="btn-home mobile-display" name="Resume" />
						<Nav />
					</m.div>

					{/* <LanguageSelector /> */}
				</header>

				{/* Main */}
				<div className="hero-main-container relative container">
					<div className="hero-text-wrap">
						<m.h1 className="hero-title-top relative" style={{ x: x }}>
							<i>WEB</i> <span>•</span> DEVELOPER
						</m.h1>
						<m.h2 className="hero-name relative" style={{ x: xr }}>
							LUIS VIEGAS
						</m.h2>

						{/* <HeroSlider />	 */}
					</div>
					<Tilt className="hero-image-wrap" options={defaultOptions}>
						<img src={ME} alt="Luis Viegas" />
					</Tilt>
				</div>

				{/* Scroll Arrow */}
				{/* <div className="scroll-wrap">
					<a href="#about-section">
						<small className="fade-in">Scroll</small>
						<div className="scroll-arrow">
							<svg width="30px" height="20px">
								<path
									stroke="#ffffff"
									fill="none"
									strokeWidth="2px"
									d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
								></path>
							</svg>
						</div>
					</a>
				</div> */}
				<div className="separator container-small"></div>
			</main>
		</>
	);
};

export default Home;
