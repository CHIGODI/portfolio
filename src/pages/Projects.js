import React from "react";
import hbnbImage from '../images/clone.png'
import epermitImage from '../images/epermit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                            <p>This is a clone of the AirBnB. The project includes property listings,
                                and search functionality, resulting
                                in a robust simulation of the actual application</p>
                            <a href="https://chigowdev.tech/hbnb_static/103-index.html"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                        </div>
                    </div>
                    <div class="work">
                        <img src={ epermitImage } alt="epermit landing page" srcset="" />
                        <div class="layer">
                            <h3>ePermit Web App</h3>
                            <p>ePermit is a platform for business owners to  simplify the registration
                                process for their businesses and the acquisition of necessary permits.
                                Returning owners have the convenience of paying their annual permit fees
                                and receiving their permit documents instantly.</p>
                            <a href="https://www.epermit.live"><i class="fas fa-external-link-alt">afw</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;