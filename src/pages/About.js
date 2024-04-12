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
                <p>Hello there!, I'm Antony Aboud, a passionate web developer with a diverse 
                    skill set spanning various technologies. My playground is the internet,
                    and I revel in the art of crafting immersive online experiences. 
                    Whether it's breathing life into the front-end or orchestrating the magic
                    behind the scenes, I am driven by a relentless desire to innovate and transform 
                    ideas into tangible realities. Join me, Antony Aboud, on this digital adventure,
                    where every line of code weaves a story, and each project is a testament to the
                    endless possibilities of the online realm. Let's code the future together!</p>
                <div class="tab-titles">
                    <p class="tab-links">Education</p>
                </div>
                <div class="tab-contents" id="education">
                    <ul>
                        <li><span>2018-2022</span><br />Jomo Kenyatta University of Agriculture and Technology</li>
                        <li><span>2023-2024</span><br />Alx Afirca</li>
                    </ul>
                </div> 
            </div>
          </div>  
        </div>
    </div>
    );
}

export default About;