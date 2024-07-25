import React from "react";

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-sharp fa-solid fa-paper-plane"></i>chiegody254@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i>+254708051357</p>
                        <div className="social-icons">
                            <a href="https://github.com/CHIGODI"><i class="fa-brands fa-github"></i></a>
                            <a href="https://twitter.com/Chigow2"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/chigowdev/"><i class="fa-brands fa-linkedin"></i></a>
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