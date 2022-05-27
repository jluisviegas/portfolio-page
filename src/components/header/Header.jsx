import React from 'react';
import './header.css'
import Button from './Button'
import ME from '../../assets/me.png'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h1 className="fs-800">Luis Viegas</h1>
       <h5 className="fs-600 color-grey">Frontend Developer</h5>
       <Button />
       <SocialMedia />
     
      <div className="me">
         <img src={ME} alt="me" />
      </div>

      <div className="center-con">
        <div className="round">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>

     </div>
   </header>
  )
}

export default Header