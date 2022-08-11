import React from 'react';
import './hero.css'
import CV from '../../assets/images/cv.pdf'

const Button = () => {
  return (
  <div className="cta fs-300">
    <a href={CV} download className='btn'>Baixar Currículo</a>
    {/* <a href="#contact" className='btn btn-primary'>Entre em Contato</a> */}
  </div>
  )
}

export default Button