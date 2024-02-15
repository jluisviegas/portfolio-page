import { motion as m, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { itemAnimated, navItemsList, slideY } from '../animation';
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
					background: 'hsl(224, 52%, 4%)',
				}}
				animate={{
					background: 'hsl(240, 24%, 8%)',
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
						<m.i variants={itemAnimated} class="fa-solid fa-star-of-life"></m.i>
						<m.p variants={itemAnimated}>WEB DEVELOPER</m.p>
						<m.p variants={itemAnimated}>PORTFOLIO 2024</m.p>
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
					<m.div className="hero-text-wrap">
						<m.h1
							className="hero-title-top"
							style={{ x, opacity }}
							variants={slideY}
						>
							HI THERE, I'M
						</m.h1>
						<m.h1
							className="hero-title-middle relative"
							style={{ x: xr }}
							variants={slideY}
						>
							LUIS VIEGAS.
						</m.h1>
						<m.h2 className="hero-luis" variants={slideY}>
							A freelance frontend developer & web designer devoted to the craft
							of building websites and create enjoyable experiences, from
							<b> SÃO LUIS, BRAZIL.</b>
						</m.h2>
					</m.div>
					<m.div
						className="location-text"
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.8,
								delay: 1,
							},
						}}
					></m.div>

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
