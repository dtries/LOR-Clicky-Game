import React from "react";
import "./style.css";

function CharacterCard(props) {
    //This is a function (not a class) so it does not require a render
    return (
        <div className="row" id="game-row">
            <div className="col s3">
                <div className="card">
                    <img alt={props.name} src={props.image} />
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;