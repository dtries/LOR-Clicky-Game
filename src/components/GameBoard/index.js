import React from "react";
import "./style.css";

function GameBoard (props) {
    return (
        <div className = "game-board">
            {props.children}
        </div>
    );
}

export default GameBoard;