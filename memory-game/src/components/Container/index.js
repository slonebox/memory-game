import React from "react";
import "./style.css";

function Container(props) {
    return (
        <div className="container" align="center">
            {props.children}
        </div>
    )
};

export default Container;