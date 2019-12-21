import React from "react";
import "./style.css";

function Jumbotron () {
    return (
        <div className="jumbotron">
            <h1 className="justify-content-center">Forgetful Fiona!</h1>
            <p>Click on the different photos of Fiona to score points. If you click on the same Fiona twice, your streak ends and your score resets to zero. Good luck!</p>
        </div>
    )
};

export default Jumbotron;