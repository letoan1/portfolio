/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './_footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

export default function Footer() {
    return (
        <footer>
            <a href="#" className="footer__logo">
                TOAN
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/kook.toan.35">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All right reserved.</small>
            </div>
        </footer>
    );
}
