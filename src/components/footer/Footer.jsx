import React from 'react';
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
          <a href="home.html"><svg width="25" height="50" viewBox="0 0 55 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.816 63.52H30.912V68H5.824V25.76H10.816V63.52Z" fill="white" />
              <path d="M31.144 59.704H29.352L10.984 16.76H16.552L30.248 49.848L43.944 16.76H49.512L31.144 59.704Z" fill="#01C380" /></svg>
          </a>
      </div>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub/></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; 2022 Luis Viegas. Todos os direitos reservados</small>
      </div>
    </footer>
  )
}

export default Footer