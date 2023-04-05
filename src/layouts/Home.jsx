import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { blinder, cardAnimated, itemAnimated, wrapper } from '../animation';
import CV from '../assets/images/cv.pdf';
import ME from '../assets/images/me.png';
import LanguageSelector from '../components/LanguageSelector';
import Logo from '../components/Logo';
import Nav from '../components/Navbar/Navbar';
import SocialMedia from '../components/Socials';
import { i18next as lng } from '../translate/i18n';
const Home = () => {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 0.9], [0, -900]);

	const homeRef = useRef(null);
	const [toggle, setToggle] = useState(false);

	const showNavBar = () => {
		setToggle((prev) => !prev);
	};

	return (
		<>
			<main className="hero-section relative" id="#">
				{/* Header */}
				<header className="header-menu container">
					<Logo />
					<Nav />
					{/* <LanguageSelector /> */}
				</header>

				{/* <m.div
					className="bg-shape"
					initial={{ width: '100vw' }}
					animate={{ width: '0vw' }}
					transition={{
						duration: 1,
						ease: [0.5, 0.71, 0.2, 1.01],
					}}
				></m.div> */}

				<m.div
					className="blinders-wrapper"
					ref={homeRef}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					variants={wrapper}
				>
					<m.div className="blinder" variants={blinder}></m.div>
					<m.div className="blinder" variants={blinder}></m.div>
					<m.div className="blinder" variants={blinder}></m.div>
					<m.div className="blinder" variants={blinder}></m.div>
					<m.div className="blinder" variants={blinder}></m.div>
				</m.div>

				{/* Main */}
				<div className="hero-container relative container">
					<m.div
						className="hero-mid-row"
						initial={{ opacity: 0, scale: 0.5, x: -80 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>
						<h5>{lng.t('headers.dev1')}</h5>
						<h5>{lng.t('headers.dev2')}</h5>
						<div className="icon-up">
							<FiArrowUpRight />
						</div>
					</m.div>

					<div className="image-header">
						<img src={ME} alt="Luis Viegas" />
					</div>

					<div className="footer-links">
						<ul className="footer-social">
							<li>
								<small> LinkedIn</small>
							</li>
							<li>
								<small>Instagram</small>
							</li>
							<li>
								<small>GitHub</small>
							</li>
						</ul>
					</div>

					<m.h1 style={{ x: x }}>Luis Viegas</m.h1>
					<div className="arrow-wrapper">
						<HiOutlineArrowDown />
						<p>Conheca alguns dos meus projetos e saiba mais obbre mim.</p>
					</div>

					<div className="desktop-social">
						<SocialMedia />
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
