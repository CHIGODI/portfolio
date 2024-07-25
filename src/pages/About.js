import React from "react";
import bgImage from '../images/Background.jpg'

const About = () => {
    return (
        <div id="about">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
                <img src={bgImage} alt="Chigodi" />
            </div>
            <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                        <p>Hey there, I'm Chigodi Antony, a software engineer passionate about making waves from Kenya. I'm all about using tech to tackle everyday challenges head-on. Whether it's jazzing up websites with HTML, CSS, and jQuery, or crafting robust backends with Flask, Python, and Node.js, I'm your go-to person. Plus, I'm no stranger to databases like MySQL and NoSQL. Lately, I've been diving into the world of React, adding that extra oomph to my front-end game. And when it comes to keeping things shipshape, you can count on me with my DevOps skills, especially Docker. I'm a firm believer in the Agile way of working, ensuring we stay nimble and deliver results. Let's team up and make some tech magic happen!</p>
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