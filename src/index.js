import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// === renders each tile for Game ====
class Tile extends React.Component {
    // Every class has a render
    render() {

        // Every render has a return
        return (
            <div className="card-image">
                <img src="data:image/jpeg;base64,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" alt="LOR PIC" />
                {/* TODO */}
            </div> //Makes each tile a button on display
        );
    }
}

// === game board that controls the tiles ====
class Board extends React.Component {

    //determines what information each tile contains
    renderTile(i) {
        return <Tile />; //passes information down to Tile Class
    }

    render() { //Every class has a render
        const gameTitle = "Lord of the Rings Memory Game"; //passed to return in this component
        const instructions = "Click on each image only once. Can you get them all? ";  //passed to retrun in this component

        //Use parentheses to encapsulate all that should be returned
        return ( 
            <div className = "container">
                <div className="row" id="title-row">
                    <div className="col s12">
                        <h1>{gameTitle} </h1>
                        <h3>{instructions}</h3>
                    </div>
                </div>

                <div className="row" id="game-row">
                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(0)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(1)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(2)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(3)}
                        </div>
                    </div>
                </div>

                <div className="row" id="game-row">
                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(4)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(5)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(6)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(7)}
                        </div>
                    </div>
                </div>

                <div className="row" id="game-row">
                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(8)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(9)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(10)}
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                                {this.renderTile(11)}
                        </div>
                    </div>
                </div>

            </div>



        ); 
    }
}

class Game extends React.Component {
    render() { //every class has a render
        return ( 
                    <Board />
        ); //every render has a return

    }




}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);



