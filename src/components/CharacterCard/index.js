import React from "react";
import "./style.css";

function CharacterCard(props) {
    //This is a function (not a class) so it does not require a render
    return (
        <div className="card" onClick={props.handleClick}> 
            <div className="card-image">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default CharacterCard;