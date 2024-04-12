import React from "react";

const Projects = () => {
    return (
        <div id="portfolio">
        <div class="container">
        <h1 class="sub-title">Projects</h1>
        <div class="work-list">
            <div class="work">
                <img src="images/work-1.png" alt="" srcset="" />
                <div class="layer">
                    <h3>AirBnB clone</h3>
                    <p>The app connects tyou to the talented people around the world. Download
                        it from play store.
                    </p>
                    <a href="https://chigowdev.tech/hbnb_static"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="images/work-2.png" alt="" srcset="" />
                <div class="layer">
                    <h3>Social Media App</h3>
                    <p>The app connects tyou to the talented people around the world. Download
                        it from play store.
                    </p>
                    <a href="#"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="images/work-3.png" alt="" srcset="" />
                <div class="layer">
                    <h3>Social Media App</h3>
                    <p>The app connects tyou to the talented people around the world. Download
                        it from play store.
                    </p>
                    <a href="#"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
        <a href="#" class="btn">See More</a>
    </div>
        </div>
    );
}
export default Projects;