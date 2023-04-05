import emailjs from '@emailjs/browser';
import {
	motion as m,
	useInView,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineArrowForwardIos, MdOutlineEmail } from 'react-icons/md';
import { cardAnimated, itemAnimated } from '../animation';
import Button from '../components/Button';
import Socials from '../components/Socials';
import { i18next as lng } from '../translate/i18n';

const Contact = () => {
	const form = useRef(null);
	const hRef = useRef(null);
	const cRef = useRef(null);
	const isInView = useInView(hRef, { once: false });

	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 0], [0, 0]);

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
		<section className="relative" id="contact-section" ref={hRef}>
			{/* Section Header */}
			<div className="section-header">
				<div className="big-header">{lng.t('buttons.contact')}</div>
			</div>

			<m.div className="contact-container" style={{ y }}>
				{/* Contact Info */}
				<div className="contact-bg-info ">
					<div className="contact-info">
						<m.div
							className="info-option"
							ref={cRef}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							variants={cardAnimated}
						>
							<MdOutlineEmail />

							<m.div className="info-title" variants={itemAnimated}>
								<h5>Email</h5>
							</m.div>
							<m.div className="info-desc" variants={itemAnimated}>
								<p>jlviegass@gmail.com</p>
								<a href="mailto: jluisviegas@hotmail.com" target="_blank">
									<p>{lng.t('contact.email')}</p>
									<FiArrowUpRight />
								</a>
							</m.div>
						</m.div>

						<m.div
							className="info-option"
							ref={cRef}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							variants={cardAnimated}
						>
							<BsWhatsapp />

							<m.div className="info-title" variants={itemAnimated}>
								<h5>Phone</h5>
							</m.div>
							<m.div className="info-desc" variants={itemAnimated}>
								<p>+55 98 99171 2252</p>
								<a
									href="https://api.whatsapp.com/send?phone=5598991712252"
									target="_blank"
								>
									<p>{lng.t('contact.wp')}</p>
									<FiArrowUpRight />
								</a>
							</m.div>
						</m.div>
						<Socials />
					</div>
				</div>

				{/* Contact Form */}
				<form ref={form} onSubmit={sendEmail}>
					<div className="contact-message">
						<FiArrowDownRight />
						<h3 className="text-right">
							Diga
							<i> Olá!</i>
						</h3>
					</div>

					<input
						type="text"
						name="name"
						placeholder={lng.t('contact.name')}
						required
					/>
					<input type="email" name="email" placeholder="Email" required />
					<textarea
						className="ff-headers"
						name="message"
						rows="3"
						placeholder="Mensagem"
					></textarea>
					<div className="submit">
						<Button type="submit" name={lng.t('buttons.msg')} className="btn" />
					</div>
				</form>
			</m.div>
		</section>
	);
};

export default Contact;
