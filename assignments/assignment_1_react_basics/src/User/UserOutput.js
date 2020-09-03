import React from "react";

import "./User.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My name is {props.username}. </p>
            <p>{props.text}</p>
            
        </div>
    );
};

export default userOutput;