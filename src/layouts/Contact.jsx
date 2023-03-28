import emailjs from '@emailjs/browser';
import { motion as m, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineArrowForwardIos, MdOutlineEmail } from 'react-icons/md';
import { cardAnimated, itemAnimated } from '../animation';
import Button from '../components/Button';
import { i18next as lng } from '../translate/i18n';

const Contact = () => {
	const form = useRef(null);
	const hRef = useRef(null);
	const hInView = useInView(hRef, { once: false });

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
		<section className="relative" id="contact-section">
			{/* Section Header */}
			<m.div
				className="section-header"
				ref={hRef}
				style={{
					transform: hInView ? 'none' : 'translateY(50px)',
					opacity: hInView ? 1 : 0,
					transition:
						'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
				}}
			>
				<h2 className="container">
					{lng.t('headers.contact')} <div className="separator"></div>
				</h2>
				<div className="big-header">{lng.t('buttons.contact')}</div>
			</m.div>

			<div className="lines"></div>

			{/* Contact Info */}
			<div className="contact-container container-small">
				<div className="contact-bg-info">
					<div className="contact-info">
						<div className="info-option">
							<div className="info-title">
								<MdOutlineEmail />
								<h5>Email</h5>
							</div>
							<div className="info-desc">
								<p>jlviegass@gmail.com</p>
								<a href="mailto: jluisviegas@hotmail.com" target="_blank">
									<p>
										{lng.t('contact.email')} <MdOutlineArrowForwardIos />
									</p>
								</a>
							</div>
						</div>

						<div className="info-option">
							<div className="info-title">
								<BsWhatsapp />
								<h5>Phone</h5>
							</div>
							<div className="info-desc">
								<p>+55 98 99171 2252</p>
								<a
									href="https://api.whatsapp.com/send?phone=5598991712252"
									target="_blank"
								>
									<p>
										{lng.t('contact.wp')} <MdOutlineArrowForwardIos />
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<m.form
					ref={form}
					onSubmit={sendEmail}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					variants={cardAnimated}
				>
					<m.div className="contact-message" variants={itemAnimated}>
						<small>
							Entre em contato para dúvidas, propostas ou algo em que eu possa
							ajudá-lo(a).
						</small>
					</m.div>
					<m.div variants={itemAnimated}>
						<input
							type="text"
							name="name"
							placeholder={lng.t('contact.name')}
							required
						/>
					</m.div>
					<m.div variants={itemAnimated}>
						<input type="email" name="email" placeholder="Email" required />
					</m.div>
					<m.div variants={itemAnimated}>
						<textarea
							className="ff-headers"
							name="message"
							rows="5"
							placeholder="Mensagem"
						></textarea>
					</m.div>
				</m.form>
			</div>

			<div className="submit container-small">
				<Button type="submit" name={lng.t('buttons.msg')} className="btn" />
			</div>
		</section>
	);
};

export default Contact;
