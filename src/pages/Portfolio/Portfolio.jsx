import React from 'react';
import './style.css'
import data from './Data'


const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio-section">
      <h2 className="ff-headers uppercase fs-700">Portfolio</h2>

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

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, description, stack}) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className="card" style={{backgroundImage: `url(${image})`}}>
                  <div className=" card-content">
                    <h3 className="card-title ff-headers fs-400 uppercase">{title}</h3>
                    <p className="card-body fs-300">{description}</p>
                    <p className="card-stack">{stack}</p>
                    <a href={github} className="btn fs-300"><i className="fa-brands fa-github"></i> GitHub</a>
                  </div>
                </div>
             </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio