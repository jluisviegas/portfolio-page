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
				variants={slideY}
			>
				{/* Contact Form */}
				<div className="form-col">
					<m.div
						className="header-wrapper"
						ref={cRef}
						initial="closed"
						whileInView="open"
						viewport={{ once: true, amount: 0 }}
						variants={itemAnimated}
					>
						<h5>ENTRE EM</h5>
						<h2>CONTATO.</h2>
					</m.div>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor="">Nome</label>
						<m.input
							type="text"
							name="name"
							placeholder="Ex: José Luis"
							required
							variants={itemAnimated}
							ref={ref}
							animate={control}
							initial="closed"
						/>
						<label htmlFor="">Email</label>

						<m.input
							type="email"
							name="email"
							placeholder="Ex: joseluis@gmail.com"
							required
							variants={itemAnimated}
							ref={ref}
							animate={control}
							initial="closed"
						/>
						<label htmlFor="">Sua mensagem</label>

						<div className="text-message">
							<Button className="btn-form" name="Enviar" />
							<m.textarea
								className="ff-headers"
								name="message"
								rows="6"
								placeholder="Escreva sua mensagem"
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
							Explorando conexões e oportunidades de crescimento. <br />
							Fique a vontade para enviar uma mensagem sobre trabalhos,
							colaborações, informações ou apenas para dizer "oi"! 😊
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
