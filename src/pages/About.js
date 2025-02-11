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
                            I am a Full-Stack Software Engineer based in Mombasa, Kenya, with a strong foundation in computer science fundamentals and the ability to quickly learn and adapt to new technologies. I specialize in backend development, building REST APIs, and deploying scalable applications. My expertise includes Python (Flask/Django), JavaScript (Node.js), and modern web development frameworks like React and Next.js.

                            Beyond software engineering, I have a diverse IT skill set, including IT support, networking, and system administration. I am proficient in containerization with Docker, version control with Git, and Linux system management, ensuring seamless development and deployment processes.
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