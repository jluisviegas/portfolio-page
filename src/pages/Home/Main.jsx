import React from 'react';
import './style.css'
import Button from '../../components/Button/Button'
import ME from '../../assets/images/me.png'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

const Header = () => {
  return (
   <section className="hero-section">
     <div className="logo">
        <a href="home.html"><svg width="50" height="60" viewBox="0 0 55 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.816 63.52H30.912V68H5.824V25.76H10.816V63.52Z" fill="white" />
          <path d="M31.144 59.704H29.352L10.984 16.76H16.552L30.248 49.848L43.944 16.76H49.512L31.144 59.704Z" fill="#01C380" /></svg>
         </a>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
          ></path>
        </svg>
      </div>

      <header className="header">
        <div className="container header__container uppercase">
          <h1 className="ff-headers fs-800">Luis Viegas</h1>
          <h5 className="ff-headers fs-600 color-grey">Desenvolvedor Frontend</h5>
          
          <SocialMedia />
        </div>
        <div className="shape">
          <div className="image-header">
            <img src={ME} alt="" />
          </div>
        </div>
      </header>

      <Button />
        
    </section> 
  )
}

export default Header