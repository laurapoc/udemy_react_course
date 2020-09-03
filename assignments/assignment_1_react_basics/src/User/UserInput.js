import React from "react";

import "./User.css";


const userinput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} value={props.inputText}></input>
        </div>
    );
};

export default userinput;