import React from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active  '><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#portfolio"><BiBook/></a>
      <a href="#contact"><RiServiceLine/></a>
    </nav>
  )
}

export default Nav