import React from "react";
import hbnbImage from '../images/clone.png'

const Projects = () => {
    return (
        <div id="portfolio">
            <div class="container">
                <h1 class="sub-title">Projects</h1>
                <p>My skills? Check out my recent work here</p>
                <div class="work-list">
                    <div class="work">
                        <img src={hbnbImage} alt="Air BnB" />
                        <div class="layer">
                            <h3>AirBnB clone</h3>
                            <p>This is a clone of the AirBnB</p>
                            <a href="https://chigowdev.tech/hbnb_static/103-index.html"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="work">
                        <img src="images/work-2.png" alt="" srcset="" />
                        <div class="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world. Download
                            it from play store.
                            </p>
                        </div>
                    </div>
                    <div class="work">
                        <img src="images/work-3.png" alt="" srcset="" />
                        <div class="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects tyou to the talented people around the world. Download
                                it from play store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;