import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faPython, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id="projects">
            <h2 class="sub-title">Skills</h2>
            <p id="sub-title-desc">My Technical Skills, Languages and Tools</p>
            <div class="container">
                <div className="languages">
                    <div className="ln-title">
                        <h3 className="text-start">Languages</h3>
                        <p className="text-start">Tech stack that I utilise</p>
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
                        <h3 className="text-end" style={{ color: "#31304D" }}>Tools</h3>
                        <p className="text-end" style={{ color: "#555555" }}>Tools that I know and use daily</p>
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
