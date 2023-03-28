import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { cardAnimated, itemAnimated } from '../animation';
import CV from '../assets/images/cv.pdf';
import ME from '../assets/images/mealone.png';
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
				{/* Hamburger Button */}

				{/* Header */}
				<header className="header-menu container">
					<Logo />
					<Nav />
					{/* <LanguageSelector /> */}
				</header>

				<m.div
					className="bg-shape"
					initial={{ width: '100vw' }}
					animate={{ width: '0vw' }}
					transition={{
						duration: 1,
						ease: [0.5, 0.71, 0.2, 1.01],
					}}
				></m.div>

				{/* Main */}
				<m.div
					className="hero-container relative container"
					ref={homeRef}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					variants={cardAnimated}
				>
					<m.div className="hero-mid-row" variants={itemAnimated}>
						<h5>{lng.t('headers.dev1')}</h5>
						<h5>{lng.t('headers.dev2')}</h5>
						<div className="contact-btn-wrapper">
							<a href="#contact-section">
								<div className="contact-btn-text uppercase">
									{lng.t('buttons.contact')}
									<div>
										<FiArrowUpRight />
									</div>
								</div>
							</a>
						</div>
					</m.div>

					<m.div className="image-header" variants={itemAnimated}>
						<img src={ME} alt="Luis Viegas" />
					</m.div>

					<m.h1 style={{ x: x }}>Luis Viegas</m.h1>
					<m.div className="arrow-wrapper" variants={itemAnimated}>
						<HiOutlineArrowDown />
						<p>Conheca alguns dos meus projetos e saiba mais obbre mim.</p>
					</m.div>

					<div className="desktop-social">
						<SocialMedia />
					</div>
				</m.div>

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
