import React from "react";

const Prop = (props) => {
    return (
        <div className="container-try">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}
export default Prop;