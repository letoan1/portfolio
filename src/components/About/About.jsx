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
                        Hi! My name's Toan, im 22 years old and I graduated from FPT Polytechnic Danang in 2023. As an
                        ambitious web developer, I have accumulated over a year of practical experience in real-world
                        projects. I am deeply inspired by the belief that "IT is the king of professions," an idea
                        fueled by success stories like that of the "mechanical brother born in '96." With a clear aim to
                        rise to the position of Senior Frontend Developer within the next four years, I am eager to
                        tackle new challenges. I am committed to employing my skills in web development to create
                        innovative and efficient web design solutions that exceed expectations.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
