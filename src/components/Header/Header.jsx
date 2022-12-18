import React from 'react'
import './_header.scss'
import CTA from './CTA'
import ME from '../../assets/toan.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
       <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Le Van Toan</h1>
          <h5 className="text-light">
            Front-End Developer
          </h5>
          <CTA />
            <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
       </div>
    </header>
  )
}
