import React from 'react'
import './_portfolio.scss'
import IMG1 from '../../assets/ecommerce.png'
import IMG2 from '../../assets/movies.png'
import IMG3 from '../../assets/music.png'
import IMG4 from '../../assets/fiona.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Perfume Store',
    technical: 'ReactJS, SCSS, Redux',
    github: 'https://github.com/letoan1/project-ivt/tree/master',
    demo: 'https://dribbble.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie API',
    technical: 'ReactJS, SCSS',
    github: 'https://github.com/letoan1/moviesAPI',
    demo: 'https://dribbble.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Music Player',
    technical: 'HTML, CSS, JavaScript',
    github: 'https://github.com/letoan1/Music',
    demo: 'https://letoan1.github.io/Music/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Fiona Shop',
    technical: 'ReactJS, SCSS, Redux Toolkit, NodeJS, MongoDB, ExpressJS',
    github: 'https://github.com/call-me-alpha-auth/mern-stack-ecommerce',
    demo: 'https://dribbble.com',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5 style={{textAlign: 'center'}}>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data?.map(({id, image, title,technical, github, demo}) => {
          return (
            <article key={id} clasName="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} height='250px' />
              </div>
              <h3 style={{marginTop: '20px'}}>{title}</h3>
              <p style={{marginBottom: '10px', fontSize: '14px'}}>{technical}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
