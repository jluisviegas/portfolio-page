import React from 'react';
import './about.css'
import MeAbout from '../../assets/images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id="about-section">
     <h2>Sobre Mim</h2>

     <div className="container about__container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={MeAbout} alt="About Image" />
        </div>
       </div>

       <div className="about__content">
        

        <p>Profissional com mais de 10 anos de experiência em negócios,
            gestão, operação de vendas em administração privada e pública,
            além de programador e desenvolvedor web com formação em TI
            no exterior.
        </p>

        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Clients</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Projects</h5>
            <small>3+ Years Working</small>
          </article>
        </div>
       </div>
     </div>
   </section>
  )
}

export default About