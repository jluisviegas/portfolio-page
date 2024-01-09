import emailjs from '@emailjs/browser';
import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { cardAnimated, itemAnimated } from '../animation';
import Button from '../components/Button';
import Socials from '../components/Socials';
import { useParallax } from './Projects';

const Contact = () => {
	const form = useRef(null);
	const hRef = useRef(null);
	const cRef = useRef(null);
	const isInView = useInView(hRef, { once: false });
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	});
	const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0.2, 1]);
	const y = useParallax(scrollYProgress, 120);

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
			className=" container relative"
			id="contact-section"
			ref={sectionRef}
			style={{ opacity: opacitySection }}
		>
			<m.div
				ref={cRef}
				className="contact"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				variants={cardAnimated}
			>
				{/* Contact Form */}
				<div className="form-col">
					<m.div
						className="header-wrapper"
						ref={cRef}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: false, amount: 0 }}
						variants={cardAnimated}
					>
						<h2>
							Get in
							<i> touch.</i>
						</h2>
					</m.div>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor="">Your name</label>
						<input
							type="text"
							name="name"
							placeholder="E.g. John Doe"
							required
						/>
						<label htmlFor="">Your email</label>

						<input
							type="email"
							name="email"
							placeholder="E.g. johndoe@gmail.com"
							required
						/>
						<label htmlFor="">Message</label>

						<div className="text-message">
							<Button className="btn-form" name="Send" />
							<textarea
								className="ff-headers"
								name="message"
								rows="6"
								placeholder="Enter your message"
							></textarea>
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
						<m.div
							className="contact-arrow"
							whileHover={{ scale: 0.85 }}
							transition={{ type: 'spring', stiffness: 200, bounce: 0.25 }}
						>
							<IoMdArrowUp />
						</m.div>
					</div>
				</div>
			</m.div>
		</m.section>
	);
};

export default Contact;
