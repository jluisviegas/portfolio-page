import React from 'react';
import './style.css'
import MeAbout from '../../assets/images/me-about.jpg'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3Full, DiSass} from 'react-icons/di'
import {SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiPostgresql} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {GrGraphQl} from 'react-icons/gr'
import {VscGear} from 'react-icons/vsc'

const About = () => {
  return (
   <section className="about-section">
     <h2 className="ff-headers uppercase fs-700">Sobre Mim</h2>

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
      
     <div className="container about-container">
       <div className="about-me">
        <div className="about-me-image">
          <img src={MeAbout} alt="About Image" />
        </div>
       </div>

       


       <div className="about-content">
        <p>Profissional com mais de 10 anos de experiência em negócios,
            gestão, operação de vendas em administração privada e pública,
            além de programador e desenvolvedor web com formação em TI
            no exterior.
        </p>
        <p>Profissional com mais de 10 anos de experiência em negócios,
            gestão, operação de vendas em administração privada e pública,
            além de programador e desenvolvedor web com formação em TI
            no exterior.
        </p>
        <p>Algumas das minhas habilidades:</p>
        <div className="language-cards">
          <div className='language-card'>
            <AiOutlineHtml5 className='language-icon'/>
            <small>HTML5</small>
          </div>
          <div className='language-card'>
            <DiCss3Full className='language-icon'/>
            <small>CSS3</small>
          </div>
          <div className='language-card'>
            <DiSass className='language-icon'/>
            <small>SASS</small>
          </div>
          <div className='language-card'>
            <SiTailwindcss className='language-icon'/>
            <small>Tailwind CSS</small>
          </div>
          <div className='language-card'>
            <SiJavascript className='language-icon'/>
            <small>JavaScript</small>
          </div>
          <div className='language-card'>
            <SiTypescript className='language-icon'/>
            <small>TypeScript</small>
          </div>
          <div className='language-card'>
            <FaReact className='language-icon'/>
            <small>React</small>
          </div>
          <div className='language-card'>
            <IoLogoNodejs className='language-icon'/>
            <small>Node.js</small>
          </div>
          <div className='language-card'>
            <SiNextdotjs className='language-icon'/>
            <small>Next.js</small>
          </div>
          <div className='language-card'>
            <SiPostgresql className='language-icon'/>
            <small>PostgreSQL</small>
          </div>
          <div className='language-card'>
            <GrGraphQl className='language-icon'/>
            <small>GraphQL</small>
          </div>
          <div className='language-card'>
            <VscGear className='language-icon'/>
            <small>RestAPI</small>
          </div>
        </div>
       </div>
     </div>
   </section>
  )
}

export default About