import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { itemAnimated, navItemsList, slideY } from '../animation';
import { logo } from '../assets/images';
import resume from '../assets/resume.pdf';
import Button from '../components/Button';
import Nav from '../components/navbar/Navbar';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Home = () => {
	const main = useRef(null);

	const { scrollYProgress } = useScroll();
	const { ref, control } = useInViewAnimation();
	const x = useTransform(scrollYProgress, [1, 0], [-300, 0]);
	const xr = useTransform(scrollYProgress, [1, 0], [300, 0]);
	const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);

	return (
		<>
			<m.main
				className="hero-section"
				id="#"
				initial={{
					background: 'hsl(240, 24%, 8%)',
				}}
				animate={{
					background: 'hsl(0, 0%, 12%)',
					transition: {
						duration: 1,
					},
				}}
				ref={main}
			>
				{/* Header */}
				<m.header
					className="header container"
					variants={navItemsList}
					initial="closed"
					animate="open"
				>
					<div className="nav-content">
						<m.img
							variants={itemAnimated}
							class="fa-solid fa-star-of-life"
							src={logo}
						></m.img>
						<m.p variants={itemAnimated}>PORTFÓLIO 2024</m.p>
					</div>

					<m.div className="nav-links" variants={itemAnimated}>
						<Button
							className="btn-home mobile-display"
							name="Resume"
							href={resume}
						/>
						<Nav />
					</m.div>
				</m.header>

				{/* Main */}
				<m.div
					className="hero-main-container relative container "
					variants={navItemsList}
					initial="closed"
					animate="open"
				>
					<m.div className="hero-description">
						<m.h4 variants={slideY}>
							<b>Desenvolvedor </b>
							web e web <b>designer</b> freelancer dedicado à arte de
							<b> criar sites </b>e experiências digitais únicas agradáveis e
							inspiradoras. Especializado em soluções personalizadas para cada
							cliente. Baseado em
							<b> SÃO LUIS / MA, BRASIL.</b>
						</m.h4>
					</m.div>

					<div className="hero-headers">
						<div className="hero-header-top">
							<div className="hero-socials">
								<ul>
									<li>INSTAGRAM</li>
									<li>LINKEDIN</li>
								</ul>
							</div>
							<m.h1
								className="hero-title-top"
								style={{ x, opacity }}
								variants={slideY}
							>
								LUIS VIEGAS
							</m.h1>
						</div>

						<m.h1
							className="hero-title-bottom relative"
							style={{ x: xr }}
							variants={slideY}
						>
							DESENVOLVEDOR <br /> & WEB DESIGNER.
						</m.h1>
					</div>

					<div>
						<m.a
							href="#project-section"
							className="scroll-down"
							variants={itemAnimated}
							initial="closed"
							animate="open"
						>
							<IoMdArrowDown />
						</m.a>
					</div>
				</m.div>
			</m.main>
		</>
	);
};

export default Home;
