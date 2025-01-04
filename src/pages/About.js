import React from "react";
import bgImage from '../images/Background.jpg'
import { Link } from "react-scroll";

const About = () => {
    return (
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="about-col-1">
                        <img src={bgImage} alt="" />
                    </div>
                    <div class="about-col-2">
                        <h1 class="sub-title">About Me</h1>
                        <p>
                            I am Antony Aboud Chigodi, a Full-Stack Software Engineer based in Mombasa, Kenya.
                            I specialize in backend development and have a passion for building REST APIs and deploying
                            scalable applications. My expertise includes Python with Flask/Django, JavaScript with Node.js,
                            and web development technologies like React and Next.js.
                            I have hands-on experience with containerization using Docker, version control with Git, and Linux system administration.
                        </p>
                        <div className="remote">
                            <p>I am available for remote work across different time zones<span className="live"> </span></p>
                            <Link to="contact" smooth={true} duration={1000}>
                                <button class="btn">Let's work  </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;