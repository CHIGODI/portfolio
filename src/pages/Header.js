import React from "react";
import ScrollLink from "../ScrollLink";

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
                        <li><ScrollLink to="services">Skills</ScrollLink></li>
                        <li><ScrollLink to="contact">Contact</ScrollLink></li>
                        <i class="fa-solid fa-xmark" onclick="closeMenu()"></i>
                    </ul>
                    <i class="fa-solid fa-bars" onclick="openMenu()"></i>
                </nav>
                <div class="header-text">
                    <h1>Hi, I'm Chigodi.</h1>
                    <p id="title">Software Engineer</p>
                    <p>Passionate about crafting<br /> innovative solutions</p>
                    <button className="cv">Download CV</button>
                </div>
            </div>
        </div>
    );
}

export default Nav;