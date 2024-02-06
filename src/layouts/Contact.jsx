import emailjs from '@emailjs/browser';
import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { itemAnimated, slideY } from '../animation';
import Button from '../components/Button';
import Socials from '../components/Socials';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { useParallax } from './Projects';

const Contact = () => {
	const form = useRef(null);
	const cRef = useRef(null);
	const sectionRef = useRef(null);
	const { ref, control } = useInViewAnimation();

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start 0.9', 'start start'],
	});
	const y = useParallax(scrollYProgress, 90);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			form.current,
			import.meta.env.VITE_PUBLIC_KEY
		);

		e.target.reset();
	};

	return (
		<m.section
			className="container relative"
			id="contact-section"
			ref={sectionRef}
			variants={slideY}
			initial="closed"
			animate={control}
		>
			<m.div
				ref={cRef}
				className="contact"
				initial="closed"
				whileInView="open"
				viewport={{ once: true, amount: 0 }}
				variants={itemAnimated}
			>
				{/* Contact Form */}
				<div className="form-col">
					<m.div
						className="header-wrapper"
						ref={cRef}
						initial="closed"
						whileInView="open"
						viewport={{ once: false, amount: 0 }}
						variants={itemAnimated}
					>
						<h2>
							Get in
							<i> touch.</i>
						</h2>
					</m.div>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor="">Your name</label>
						<m.input
							type="text"
							name="name"
							placeholder="E.g. John Doe"
							required
							variants={itemAnimated}
							ref={ref}
							animate={control}
							initial="closed"
						/>
						<label htmlFor="">Your email</label>

						<m.input
							type="email"
							name="email"
							placeholder="E.g. johndoe@gmail.com"
							required
							variants={itemAnimated}
							ref={ref}
							animate={control}
							initial="closed"
						/>
						<label htmlFor="">Message</label>

						<div className="text-message">
							<Button className="btn-form" name="Send" />
							<m.textarea
								className="ff-headers"
								name="message"
								rows="6"
								placeholder="Enter your message"
								variants={itemAnimated}
								ref={ref}
								animate={control}
								initial="closed"
							></m.textarea>
						</div>
					</form>
				</div>

				{/* Contact Information */}
				<div className="contact-col">
					<div className="contact-text-message">
						<p>
							Exploring growth opportunities and connections. <br />
							Feel free to send a message for collaborations, advice, or just to
							say hi!
						</p>
						<Socials className="icon-list-contact" />
					</div>
					<div className="info-wrapper">
						<m.a
							href="#"
							className="contact-arrow"
							whileHover={{ scale: 0.85 }}
							transition={{ type: 'spring', stiffness: 200, bounce: 0.25 }}
						>
							<IoMdArrowUp />
						</m.a>
					</div>
				</div>
			</m.div>
		</m.section>
	);
};

export default Contact;
