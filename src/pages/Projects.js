import React from "react";
import epermitImage from '../images/epermit.png';

const Projects = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">Projects</h1>
                <p>My skills? Here are my recent works</p>
                </div>
            {/* Carousel Section */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="400"
                                src="https://www.youtube.com/embed/_SgQ1aFinpE
"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img  className="my-work-imgs" src={epermitImage} alt="epermit landing page" />
                    </div>
                    <div className="carousel-item">
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="400"
                                src="https://www.youtube.com/embed/9ncSdWp3nqM
"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
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
