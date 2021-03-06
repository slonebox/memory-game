import React from "react";
import "./style.css";

function MemoryCard(props) {
    return (
        <div className="card justify-content-center">
            <div className="img-container">
                <img alt={props.alt} src={props.image} dataID={props.id} onClick={props.handleCardClick}/>
            </div>
        </div>
    )
};

export default MemoryCard;