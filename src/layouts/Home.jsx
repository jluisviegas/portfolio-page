import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { itemAnimated, slideRightY } from '../animation';
import resume from '../assets/resume.pdf';
import Button from '../components/Button';
import Logo from '../components/Logo';
import ScrollDown from '../components/ScrollDown';
import Nav from '../components/navbar/Navbar';
import useInViewAnimation from '../hooks/useInViewAnimation';

export function CurrentDate() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="date">
			<p>{date.toDateString()}</p>
		</div>
	);
}

const Home = () => {
	const main = useRef(null);

	const { scrollYProgress } = useScroll({
		target: main,
		offset: ['start 0.9', 'start start'],
	});
	const { ref, control } = useInViewAnimation();

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
				style={{ opacity: scrollYProgress }}
				ref={main}
			>
				{/* Header */}
				<header className="header container">
					{/* <Logo size="50" /> */}
					<div className="nav-content">
						<i class="fa-solid fa-star-of-life"></i> <p>WEB DEVELOPER</p>
						<p>PORTFOLIO 2024</p>
					</div>

					<m.div
						className="nav-links"
						initial={{
							opacity: 0,
							scale: 0.5,
							y: -50,
						}}
						animate={{
							opacity: 1,
							scale: 1,
							y: 0,
							transition: {
								duration: 0.5,
								delay: 0.5,
							},
						}}
					>
						<Button
							className="btn-home mobile-display"
							name="Resume"
							href={resume}
						/>
						<Nav />
					</m.div>
				</header>

				{/* Main */}
				<div className="hero-main-container relative container ">
					<m.div
						className="hero-text-wrap"
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
							transition: {
								duration: 2,
								delay: 1.2,
							},
						}}
					>
						<m.h1
							className="hero-title-top relative"
							// style={{ x: xr }}
						>
							HI THERE, I'M
						</m.h1>
						<m.h1 className="hero-title-middle relative"> LUIS VIEGAS.</m.h1>
						<m.h2 className="hero-luis">
							A freelance frontend developer & web designer devoted to the craft
							of building websites and create enjoyable experiences, from São
							Luis, Brazil.
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
					>
						{/* <p>Based in São Luis, BRAZIL</p> */}
						{/* <CurrentDate /> */}
					</m.div>
					<m.div
						className="scroll-down"
						initial={{
							opacity: 0,
							scale: 0.7,
						}}
						animate={{
							opacity: 1,
							scale: 1,

							transition: {
								duration: 0.8,
								delay: 1,
							},
						}}
					>
						<ScrollDown />
					</m.div>
				</div>
			</m.main>
		</>
	);
};

export default Home;
