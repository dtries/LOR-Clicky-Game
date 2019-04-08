import React from "react";
import "./style.css";

function GameBoard(props) {
    return (
        <div className = "game-board">
            {/* <div className="row" id="game-row"> */}
                {/* <div className="col s3"> */}
                    {props.children}
                {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default GameBoard;