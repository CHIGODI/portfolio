import React from "react";
import bgImage from '../images/Background.jpg'

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
                            Hello, I'm Antony Aboud Chigodi, a Full-Stack Software Engineer from Nairobi, Kenya.
                            I specialize in backend development and have a passion for building REST APIs and deploying
                            scalable applications. My expertise includes Python with Flask/Django, JavaScript with Node.js,
                            and web development technologies like React and Nextjs.
                            I have hands-on experience with containerization using Docker, version control with Git, and Linux system administration.
                        </p>
                        <div class="tab-titles">
                            <p class="tab-links">Education</p>
                        </div>
                        <div class="tab-contents" id="education">
                            <ul>
                                <li><span>2018 - 2022</span><br />Jomo Kenyatta University of Agriculture and Technology</li>
                                <li><span>2023 - 2024</span><br />Alx Africa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;