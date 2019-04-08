import React from "react";
import "./style.css";

function Title(props) {
    const gameTitle = "Lord of the Rings Memory Game"; //passed to return in this component
    const instructions = "Click on each image only once. Can you get them all? ";  //passed to retrun in this component

    return (
        <div className="row" id="title-row">
            <div className="col s12">
                <h1>{gameTitle} </h1>
                <h3>{instructions}</h3>
            </div>
        </div>

    );
}
export default Title;