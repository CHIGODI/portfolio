import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faPython, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id="projects">
            <div class="container">
                <h2 class="sub-title">Skills</h2>
                <p id="sub-title-desc">My Technical Skills, Languages and Tools</p>
                <div className="languages">
                    <div className="ln-title">
                        <h3>Languages</h3>
                        <p>Tech stack that I utilise</p>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faHtml5} className="ln-icons" />
                        <h4>HTML</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faCss3} className="ln-icons" />
                        <h4>CSS</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faJs} className="ln-icons" />
                        <h4>JavaScript</h4>
                    </div>
                    <div id="ln-tiles">
                        <FontAwesomeIcon icon={faPython} className="ln-icons" />
                        <h4>Python</h4>
                    </div>
                    <div id="ln-tiles">
                         <FontAwesomeIcon icon={faCode}  className="ln-icons" />
                        <h4>C Programming</h4>
                    </div>
                </div>
                <div className="tools">
                    <div className="ln-title">
                        <h3>Tools</h3>
                        <p>Tools that I know and use daily</p>
                    </div>
                    <div id="ln-tiles">
                        <h4>VS Code</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Docker</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Linux</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Emacs</h4>
                    </div>
                    <div id="ln-tiles">
                        <h4>Github</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Skills;
