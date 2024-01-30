import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { slideRightY, spring } from '../animation';
import CV from '../assets/images/cv.pdf';
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
	const { scrollYProgress } = useScroll();
	const { ref, control } = useInViewAnimation();

	return (
		<>
			<main className="hero-section" id="#">
				{/* Header */}
				<header className="header container">
					<Logo size="50" />
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
						<Button className="btn-home mobile-display" name="Resume" />
						<Nav />
					</m.div>
				</header>

				{/* Main */}
				<m.div className="hero-main-container relative container ">
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
							WEB
						</m.h1>
						<m.h1 className="hero-title-middle relative">DEVELOPER</m.h1>
						<m.h2 className="hero-name relative">
							<span>LUIS</span> VIEGAS
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
						<p>Based in São Luis, BRAZIL</p>
						<CurrentDate />
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
				</m.div>
			</main>
		</>
	);
};

export default Home;
