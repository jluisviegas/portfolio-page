import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
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
					<Tilt className="hero-image-wrap" options={defaultOptions}>
						<img src={ME} alt="Luis Viegas" />
					</Tilt>
					<div className="hero-text-wrap">
						<m.h1 className="hero-name relative" style={{ x: x }}>
							LUIS VIEGAS	
						</m.h1>
						<m.h1 className="hero-title-top relative" style={{ x: xr }}>
							web
						</m.h1>
						<m.h1 className="hero-title-bottom relative" style={{ x: x }}>
							developer
						</m.h1>
					</div>
					<m.a
						href="#about-section"
						className="arrow-wrapper"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
					>
						<IoMdArrowDown />
					</m.a>
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
