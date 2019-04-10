import React from "react";
import "./style.css";

function CharacterCard(props) {

    // console.log(`ID is ${props.id}`);
    //This is a function (not a class) so it does not require a render
    return (
        <div className="card" onClick={props.handleClick}> 
            <div className="card-image">
                <img value={props.id} alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default CharacterCard;