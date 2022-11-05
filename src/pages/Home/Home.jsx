import React, { useRef } from 'react';
import CV from '../../assets/images/cv.pdf';
import ME from '../../assets/images/mealone.png';
import Button from '../../components/Button/Button';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Navbar/Navbar';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { i18next as lng } from '../../translate/i18n';

import './style.css';

const Home = () => {
	const overlay = useRef();
	const navRef = useRef();
	const mobileMenu = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle('open');
		overlay.current.classList.toggle('overlay-show');
		mobileMenu.current.classList.toggle('show-menu');
	};
	return (
		<>
			<section className="hero-section container relative" id="#">
				{/* Mobile Menu */}
				<div ref={overlay} id="overlay"></div>
				<button ref={navRef} className="mobile-menu" onClick={showNavBar}>
					<label class="menu" for="hi">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</label>
				</button>
				<div ref={mobileMenu} className="mobile-main-menu">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#about-section">{lng.t('nav.about')}</a>
						</li>
						<li>
							<a href="#portfolio-section">{lng.t('nav.portfolio')}</a>
						</li>
						<Button href={CV} name={lng.t('buttons.cv')} />
					</ul>
				</div>
				<LanguageSelector />

				{/* Header */}
				<header className="page-header fade-in relative">
					<Logo />
					<Nav />
					<Button href={CV} name={lng.t('buttons.cv')} />
				</header>
				<div className="bg-shape fade-right"></div>

				{/* Main */}
				<main className="hero-container relative">
					<div className=" fw-300 fade-left">
						<h1 className="ff-primary fw-300 uppercase">
							{lng.t('headers.dev1')}
						</h1>
						<h1 className="ff-primary uppercase">{lng.t('headers.dev2')}</h1>
					</div>

					<div className="fade-up">
						<h1 className="ff-primary fw-300  uppercase color-green">
							Luis Viegas
						</h1>
					</div>
					<div className="image-header fade-right">
						<div className="image-overlay">
							<h5 className="overlay-text uppercase ff-primary fs-500 color-accent">
								Luis Viegas
							</h5>
							<p className="ff-text fs-300 color-bege">
								Desenvolvedor Web Frontend aspirante a Fullstack e administrador
								experiente
							</p>
							<h5 className="overlay-text ff-text color-accent ">
								<i class="fa-sharp fa-solid fa-location-dot"></i>
							</h5>
							<p className="ff-text fs-300 color-bege">São Luis - MA. Brasil</p>
							<h5 className="overlay-text ff-text fs-500 color-accent">✉</h5>
							<p className="ff-text fs-300 color-bege">jlviegass@gmail.com</p>
						</div>
						<img src={ME} alt="Luis Viegas" />
					</div>
					<div class="contact-btn-wrapper fade-in">
						<a href="#contact-section">
							<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
								<rect class="animated-border" height="60" width="320" />
							</svg>
							<div class="contact-btn-text ff-text fs-400 color-bege uppercase">
								{lng.t('buttons.contact')}
							</div>
						</a>
					</div>
					<div className="desktop-social fade-in">
						<SocialMedia />
					</div>
				</main>

				{/* Scroll Arrow */}
				<div className="scroll-wrap">
					<a href="#about-section">
						<small className="fade-in">Scroll</small>
						<div className="scroll-arrow">
							<svg width="30px" height="20px">
								<path
									stroke="#ffffff"
									fill="none"
									stroke-width="2px"
									d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
								></path>
							</svg>
						</div>
					</a>
				</div>
			</section>
		</>
	);
};

export default Home;
