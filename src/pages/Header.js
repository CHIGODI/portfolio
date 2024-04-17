import React from "react";
import ScrollLink from "../ScrollLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingAnimation from "../components/TypingAnimation";

const Nav = () => {
    return (
        <div id="header">
            <div class="navigation">
                <nav>
                    <h1 class="logo">ChigowDEV</h1>
                    <ul id="side-menu">
                        <li><a href="#header" services>Home</a></li>
                        <li><ScrollLink to="about">About</ScrollLink></li>
                        <li><ScrollLink to="portfolio">Projects</ScrollLink></li>
                        <li><ScrollLink to="projects">Skills</ScrollLink></li>
                        <li><ScrollLink to="contact">Contact</ScrollLink></li>
                        <i class="fa-solid fa-xmark" onclick="closeMenu()"></i>
                    </ul>
                    <i class="fa-solid fa-bars" onclick="openMenu()"></i>
                </nav>
                <div class="header-text">
                    <h1>Hi, I'm Chigodi</h1>
                    <TypingAnimation dataText={['Software Engineer', 'DevOps Engineer']} />
                    <p>Passionate about crafting<br /> innovative solutions</p>
                    <ScrollLink to="portfolio"><button className="cv">Explore Projects</button></ScrollLink>
                    <div className="action-icons">
                        <a href="mailto:chiegody254@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="header-icons" /></a>
                        <a href="https://wa.me/+254708051357"><FontAwesomeIcon icon={faWhatsapp} className="header-icons" /></a>
                        <a href="https://twitter.com/Chigow2"><FontAwesomeIcon icon={faTwitter} className="header-icons" /></a>
                        <a href="https://www.linkedin.com/in/chigowdev/"><FontAwesomeIcon icon={faLinkedin} className="header-icons" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;