import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Button from '../../components/Button/Button';
import { i18next as lng } from '../../translate/i18n';

import './style.css';

const Contact = () => {
	const form = useRef();

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
		<section className="contact-section relative" id="contact-section">
			<h2 className="ff-primary fw-300 uppercase center color-accent">
				{lng.t('headers.contact')}
			</h2>
			<div className="contact-text color-primary">
				{lng.t('buttons.contact')}
			</div>

			<div className=" container contact-container">
				<div className="contact-options color-green">
					<article className="contact-option">
						<MdOutlineEmail />
						<h4 className="ff-headers fw-700 uppercase">Email</h4>
						<h5 className="fw-300 ">jlviegass@gmail.com</h5>
						<a href="mailto: jluisviegas@hotmail.com" target="_blank">
							{lng.t('contact.email')}
						</a>
					</article>
					<article className="contact-option">
						<BsWhatsapp />
						<h4 className="ff-headers fw-700 uppercase ">Whatsapp</h4>
						<h5 className="fw-300 ">+55 98 99171 2252</h5>
						<a
							href="https://api.whatsapp.com/send?phone=5598991712252"
							target="_blank"
						>
							{lng.t('contact.wp')}
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<div>
						<input
							type="text"
							name="name"
							placeholder={lng.t('contact.name')}
							required
						/>
					</div>
					<div>
						<input type="email" name="email" placeholder="Email" required />
					</div>
					<div>
						<textarea
							className="ff-headers"
							name="message"
							rows="7"
							placeholder="..."
						></textarea>
					</div>
					<Button type="submit" name={lng.t('buttons.msg')} />
				</form>
			</div>
		</section>
	);
};

export default Contact;
