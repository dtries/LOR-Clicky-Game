import React from "react";
import "./style.css";

function NavBar(props) {
    console.log(props.score);
    //This is a function (not a class) so it does not require a render
    return (
        <div className="navbar-fixed">
            <nav className="navbar-material">
                <div className="container nav-wrapper">
                    <a href="/" className="brand-logo left" id="brand">LOR Game</a>

                    <ul className="right" id="score"> 
                        <li>Score: {props.score} | Top Score: {props.highscore}</li>
                    </ul>
                </div>
            </nav>
        </div>


    );
}

export default NavBar;