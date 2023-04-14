import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Tilt } from 'react-tilt';
import { defaultOptions } from '../animation';
import CV from '../assets/images/cv.pdf';
import ME from '../assets/images/me-about.jpg';
import Button from '../components/Button';
import LanguageSelector from '../components/LanguageSelector';
import Logo from '../components/Logo';
import Nav from '../components/Navbar/Navbar';
import { i18next as lng } from '../translate/i18n';
const Home = () => {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 0.9], [0, -900]);
	const xr = useTransform(scrollYProgress, [0, 0.9], [0, 900]);

	return (
		<>
			<main className="hero-section relative" id="#">
				{/* Header */}
				<header className="header container">
					<Logo />
					<div className="nav-links">
						<Button className="btn-home" name="Resume" />
						<Nav />
					</div>

					{/* <LanguageSelector /> */}
				</header>

				{/* Main */}
				<div className="hero-container relative container">
					<Tilt className="image-header" options={defaultOptions}>
						<img src={ME} alt="Luis Viegas" />
					</Tilt>

					<m.h1 className="hero-name" style={{ x: x }}>
						luis viegas
					</m.h1>
					<m.h1 className="hero-title-top" style={{ x: xr }}>
						web
					</m.h1>
					<m.h1 className="hero-title-bottom" style={{ x: x }}>
						developer
					</m.h1>
					<div className="arrow-wrapper">
						<HiOutlineArrowDown />
					</div>
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
			</main>
		</>
	);
};

export default Home;
