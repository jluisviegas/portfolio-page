import React from 'react';
import './style.css'

const SocialMedia = () => {
  return (
    <div className="social-links">
      <ul role="list" ariaLabel="social links">
        <li><a aria-label="linkedin" href="https://linkedin.com/jluisviegas" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        <li><a aria-label="github" href="https://github.com/jluisviegas" target="_blank"><i className="fa-brands fa-github"></i></a></li>
        <li><a aria-label="instagram" href="https://instagram.com/luis_viegas" target="_blank"><i className="fab fa-instagram"></i></a></li>
        <li><a aria-label="e-mail" href="#contact-section"><i className="fa-solid fa-envelope"></i></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia