import React from "react";


const Card = () => {
    return (
        <div className="card">
            <h1>Subscribe</h1>
            <p>Sign up with your email address to receive news and updates</p>
            <form className="subscribe">
                <input type="text" placeholder="Firstname" name="firstname" />
                <input type="text" placeholder="Lastname" name="lastname" />
                <input type="text" placeholder="Email" name="email" />    
            </form>
            <button id="subscibe-button">subscribe</button>
        </div>
    );
}
export default Card;