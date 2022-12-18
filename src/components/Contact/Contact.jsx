/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './_contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

export default function Contact() {
    return (
        <section id="contact">
            <h5 style={{ textAlign: 'center' }}>Get In Touch</h5>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>levantoann1001@gmail.com</h5>
                        <a href="#">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Lê Văn Toản</h5>
                        <a href="#">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Phone</h4>
                        <h5>0832845357</h5>
                        <a href="#">Contact</a>
                    </article>
                </div>

                <form action="#">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
