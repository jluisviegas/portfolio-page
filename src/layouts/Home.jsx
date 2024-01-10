import { motion as m, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import CV from '../assets/images/cv.pdf';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Nav from '../components/Navbar/Navbar';

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
				</header>

				{/* Main */}
				<div className="hero-main-container relative container">
					<div className="hero-text-wrap">
						<m.h1 className="hero-title-top relative" style={{ x: xr }}>
							WEB
						</m.h1>
						<m.h1 className="hero-title-middle relative" style={{ x: x }}>
							DEVELOPER
						</m.h1>
						<m.h2 className="hero-name relative" style={{ x: xr }}>
							<span>LUIS</span> VIEGAS
						</m.h2>
					</div>
					<div className="location-text">
						<p>Based in São Luis, Brazil</p>
						<CurrentDate />
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
