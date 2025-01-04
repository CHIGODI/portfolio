import React from "react";
import ScrollLink from "../ScrollLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faX, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import TypingAnimation from "../components/TypingAnimation";
import { useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prevState) => !prevState);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    return (
        <div id="header">
            <div className="navigation">
                <nav>
                    <div className="menu-toggle">
                        <h1 className="logo">ChigowDEV</h1>
                        <FontAwesomeIcon icon={faBars} className="menu-bars" onClick={toggleMenu} />
                    </div>
                    <ul id="menu" className={showMenu ? "show" : "hide"}>
                        <FontAwesomeIcon icon={faX} className="cancel" onClick={hideMenu} />
                        <li onClick={hideMenu}><ScrollLink to="header">HOME</ScrollLink></li>
                        <li onClick={hideMenu}><ScrollLink to="about">ABOUT</ScrollLink></li>
                        <li onClick={hideMenu}><ScrollLink to="portfolio">PROJECTS</ScrollLink></li>
                        <li onClick={hideMenu}><ScrollLink to="projects">SKILLS</ScrollLink></li>
                        <li onClick={hideMenu}><ScrollLink to="contact">CONTACT</ScrollLink></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <h1>Hi, I'm Antony <span className="wave">👋🏽</span></h1>
                    <TypingAnimation dataText={['Software Engineer', 'Python Developer ⌨️']} />
                    <p>passionate about crafting<br /> innovative solutions</p>
                    <ScrollLink to="portfolio"><button className="explore">Explore Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></ScrollLink>
                    <div className="action-icons">
                        <a href="mailto:chiegody254@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="header-icons" /></a>
                        <a href="https://wa.me/+254708051357" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="header-icons" /></a>
                        <a href="https://twitter.com/Chigow2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="header-icons" /></a>
                        <a href="https://www.linkedin.com/in/chigowdev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="header-icons" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;