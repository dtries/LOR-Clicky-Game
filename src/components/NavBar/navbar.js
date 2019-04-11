import React from "react";
import "./style.css";

function NavBar(props) {
    console.log(props.score);
    //This is a function (not a class) so it does not require a render
    return (
        <div className="navbar-fixed">
        <nav className="navbar-material">
                <div className="container nav-wrapper">
                    <div className="row">
                        <div className="col s12 m4">
                            <a href="/" className="brand-logo" id="brand">LOR Game</a>
                        </div>
                        <div className="col s12 m4 center">
                            <i id="tag-line">Click Any Image To Begin</i>
                        </div>

                        <div className="col s12 m4">
                            <ul className="score right"> 
                                <li>Score: {props.score} | Top Score: {props.highscore}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default NavBar;