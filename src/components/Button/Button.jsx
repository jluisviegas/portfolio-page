import React from 'react';
import './style.css'
import CV from '../../assets/images/cv.pdf'

const Button = () => {
  return (
  <div className="cv-button fs-300">
    <a href={CV} download className='btn'>Currículo</a>
    {/* <a href="#contact" className='btn btn-primary'>Entre em Contato</a> */}
  </div>
  )
}

export default Button