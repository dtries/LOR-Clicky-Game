import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';

// === renders each tile for Game ====
// class Tile extends React.Component {
//     // Every class has a render
//     render() {

//         // Every render has a return
//         return (
//             <div className="card-image">
//                 <img src= "" alt={this.props.value} />
//                 {/* TODO */}
//             </div> //Makes each tile a button on display
//         );
//     }
// }

// === game board that controls the tiles ====
// class Board extends React.Component {

//     //determines what information each tile contains
//     renderTile(i) {
//         return <Tile value={i}/>; //passes information down to Tile Class
//     }

//     render() { //Every class has a render
//         const gameTitle = "Lord of the Rings Memory Game"; //passed to return in this component
//         const instructions = "Click on each image only once. Can you get them all? ";  //passed to retrun in this component

//         //Use parentheses to encapsulate all that should be returned
//         return (
 
//         ); 
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



