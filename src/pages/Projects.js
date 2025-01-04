import React from "react";
import hbnbImage from '../images/clone.png';
import epermitImage from '../images/epermit.png';
import myBIZ from '../images/myBIZ.png';

const Projects = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">Projects</h1>
                <p>My skills? Here are my recent works</p>
                </div>
            {/* Carousel Section */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img  className="my-work-imgs" src={myBIZ} alt="epermit landing page" />
                    </div>
                    <div className="carousel-item">
                        <img  className="my-work-imgs" src={epermitImage} alt="epermit landing page" />
                    </div>
                    <div className="carousel-item">
                        <img className="my-work-imgs" src={hbnbImage} alt="epermit landing page" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Projects;
