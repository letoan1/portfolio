import React from 'react'
import './_services.scss'
import { BiCheck } from 'react-icons/bi'

export default function Services() {
  return (
    <section id="services">
      <h5 style={{textAlign: 'center'}}>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Develoment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga voluptatum temporibus vel nam alias, similique corporis ducimus accusantium, sequi hic omnis, debitis fugit ut aliquid minima aut esse delectus!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
