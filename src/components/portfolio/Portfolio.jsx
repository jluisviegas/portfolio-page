import React from 'react';
import './portfolio.css'
import data from './data'


const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, description, stack}) => {
            // return (
            //   <article key={id} className='portfolio__item'>
            //   <div className="portfolio__item-image">
            //     <img src={image} alt={title} />
            //   </div>
            //   <h3>{title}</h3>
            //   <div className="portfolio__item-cta">
            //     <a href={github} className='btn'>GitHub</a>
            //     <a href={demo} className='btn btn-primary' targer="_blank">Live Demo</a>
            //   </div>
            // </article>
            // )
            return (
              <article key={id} className='portfolio__item'>
                <div className="card" style={{backgroundImage: `url(${image})`}}>
                  <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-body">{description}</p>
                    <p className="card-stack">{stack}</p>
                    <a href={github} className="btn">GitHub</a>
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