import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'

const SocialMedia = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/jluisviegas/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/jluisviegas" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/luis_viegas" target='_blank'><FiInstagram/></a>
      <a href="mailto: jluisviegas@hotmail.com" target='_blank'><MdOutlineEmail/></a>
    </div>
  )
}

export default SocialMedia