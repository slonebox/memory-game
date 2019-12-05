import React from "react";
import "./style.css";

function MemoryCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.alt} src={props.image}/>
            </div>
        </div>
    )
};

export default MemoryCard;