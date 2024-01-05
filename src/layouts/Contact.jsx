import emailjs from '@emailjs/browser';
import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { cardAnimated, itemAnimated } from '../animation';
import Button from '../components/Button';
import { i18next as lng } from '../translate/i18n';
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
			className="relative"
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
						<h2>Get in touch.</h2>
					</m.div>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type="text"
							name="name"
							placeholder={lng.t('contact.name')}
							required
						/>
						<input type="email" name="email" placeholder="Email" required />

						<div className="text-message">
							<Button className="btn-form" name="Enviar" />

							<textarea
								className="ff-headers"
								name="message"
								rows="6"
								placeholder="Mensagem"
							></textarea>
						</div>
					</form>
				</div>

				{/* Contact Information */}
				<div className="contact-col">
					<div className="info-wrapper">
						<div className="info-option">
							<span>Email</span>
							<div className="info-desc">
								<a href="mailto: jluisviegas@hotmail.com" target="_blank">
									<p>jlviegass@gmail.com</p>
								</a>
							</div>
						</div>

						<div className="info-option">
							<div className="info-title">
								<span>Phone</span>
							</div>
							<div className="info-desc">
								<a
									href="https://api.whatsapp.com/send?phone=5598991712252"
									target="_blank"
								>
									<p>+55 98 99171 2252</p>
								</a>
							</div>
						</div>
					</div>
					<m.div
						className="contact-arrow"
						whileHover={{ scale: 0.85 }}
						transition={{ type: 'spring', stiffness: 200, bounce: 0.25 }}
					>
						<IoMdArrowUp />
					</m.div>
				</div>
			</m.div>
		</m.section>
	);
};

export default Contact;
