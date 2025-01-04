import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    const [copied, setCopied] = useState(false); // State to track if text is copied

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p
                            onClick={() => handleCopy("chiegody254@gmail.com")}
                            style={{ cursor: "pointer", color: "#9E9E9E"}}
                        >
                            <FontAwesomeIcon icon={faCopy} /> chiegody254@gmail.com
                        </p>
                        {copied && <span style={{ color: "#c084fc" }}>Text copied!</span>}
                        <p>+254708051357</p>
                        <div className="social-icons">
                            <a href="https://github.com/CHIGODI"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://twitter.com/Chigow2"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/in/chigowdev/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Email" required />
                            <textarea name="Message"  rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    );}
export default Contact;