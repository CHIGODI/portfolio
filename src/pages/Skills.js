import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id="projects">
            <div className="skill-headings">
                <h2 class="sub-title">Skills</h2>
                <p id="sub-title-desc">My Technical Skills, Languages and Tools</p>
            </div>
            <div class="container">
                <div className="languages">
                    <div className="ln-title">
                        <h3>Languages & Frameworks</h3>
                        <p>Tech stack that I utilise</p>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faJs} className="ln-icons" />
                        <h4>Next.js</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faReact} className="ln-icons" />
                        <h4>React</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faJs} className="ln-icons" />
                        <h4>Django</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faPython} className="ln-icons" />
                        <h4>Flask</h4>
                    </div>
                    <div id="ln-tiles">
                         <FontAwesomeIcon icon={faCode}  className="ln-icons" />
                        <h4>C Programming</h4>
                    </div>
                </div>
                <div className="tools">
                    <div className="ln-title">
                        <h3>Development & collaboration Tools</h3>
                        <p>Tools that I know and use daily</p>
                    </div>
                    <div id="ln-tiles">
                        <h4>Trello</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Discord</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Postman</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Docker</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Git & Github</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;
