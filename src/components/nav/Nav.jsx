import React from 'react';
import './style.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <>
      <nav>
        <a href="#" className='active'><AiOutlineHome/></a>
        <a href="#about-section"><AiOutlineUser/></a>
        <a href="#portfolio-section"><BiBook/></a>
        <a href="#contact-section"><RiServiceLine/></a>
      </nav>
    </>
  )
}

export default Nav