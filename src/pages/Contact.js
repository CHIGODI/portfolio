import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });
    const [Submit, setSubmit] = useState("Submit");

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.Name === "" || formData.Email === "" || formData.Message === "") {
            setSubmit("Submit");
            toast.error("All fields are required!");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(FormData.Email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        setSubmit('Submitting...');
        const scriptURL = "https://script.google.com/macros/s/AKfycbzU4VoYO8AEpkAPoVjZDvXqoQKcbtqM7qn4uk94P19KLIYGKMPid3DXUvqGn0P7qeg/exec";

        try {
            let response = await fetch(scriptURL, {
                method: "POST",
                body: new FormData(e.target),
            });

            if (response.ok) {
                setSubmit('Submit');
                toast.success("Message sent successfully!");
                setFormData({ Name: "", Email: "", Message: "" });
            } else {
                toast.error("Error sending message. Try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p onClick={() => handleCopy("chiegody254@gmail.com")} style={{ cursor: "pointer", color: "#9E9E9E" }}>
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
                        <form name="submit-to-google-sheet" method="POST" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" value={formData.Name} onChange={handleChange} required />
                            <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} required />
                            <textarea name="Message" rows="6" placeholder="Your Message" value={formData.Message} onChange={handleChange} required></textarea>
                            <button type="submit" className="btn btn2">{Submit}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
