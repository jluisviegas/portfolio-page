import React from 'react';
import './header.css'
import CV from '../../assets/cv.pdf'

const Button = () => {
  return (
  <div className="cta">
    <a href={CV} download className='btn'>Baixar Currículo</a>
    <a href="#contact" className='btn btn-primary'>Entre em Contato</a>
  </div>
  )
}

export default Button