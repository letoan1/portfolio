/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './_about.scss';
import ABOUTME from '../../assets/toan-about.jpg';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosSchool } from 'react-icons/io';
import { FaAward } from 'react-icons/fa';

export default function About() {
    return (
        <section id="about">
            <h5 style={{ textAlign: 'center' }}>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ABOUTME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <IoIosSchool className="about__icon" />
                            <h5>School</h5>
                            <small>FPT Polytechnic College </small>
                        </article>
                        <article className="about__card">
                            <HiLocationMarker className="about__icon" />
                            <h5>Address</h5>
                            <small>Da Nang</small>
                        </article>
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Years Of Experience</h5>
                            <small>1 + </small>
                        </article>
                    </div>
                    <p>
                        Hi! My name is Toan, I'm 21 years old and currently a final year student at FPT Polytechnic
                        Danang. My chance to come to IT is thanks to the legend "IT is the king of professions", or the
                        story "mechanical brother was born in 96". I have more than 1 year of experience with school
                        projects as well as real projects, I promise to design the best web for you.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
