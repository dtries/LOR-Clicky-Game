import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard/character_card";
import Container from "./components/Container/container";
import Title from "./components/Title/title";
import GameBoard from "./components/GameBoard/game_board";
import characters from "./characters.json";
import NavBar from "./components/NavBar/navbar";

var score = 0;
var highscore = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guessed: [],
            characters,
            score: 0,
            highscore: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = e => {
        let startAgain = 0;
        let currentGuess = e.target.alt
        let guessChecker = this.state.guessed.indexOf(currentGuess) > -1;
        console.log(currentGuess);
        console.log(guessChecker);
        
        this.setState({ guessed: [...this.state.guessed, e.target.alt] });
        console.log(this.state.guessed);

        if (guessChecker) {
            score = 0;
            this.setState ({ guessed: []});
            this.setState ({ score: 0 });
            startAgain = 1;
        }

        if (startAgain !== 1) {
            score += 1;
        this.setState ({score: score});
        }

        if (score > highscore) {
            highscore = score;
            this.setState ({highscore: highscore});
        }
        console.log(`The score is ${score}`);
        console.log(`The high score is ${highscore}`);
    }
         
    // every class has a render
    render () {

        shuffle(characters);

        // every render has a return, this is used to set the Character Card images and Title
        return (
            <div>
                <NavBar 
                    score={this.state.score}
                    highscore={this.state.highscore}
                />
                <Container>
                    <Title />
                    <GameBoard>
                        {this.state.characters.map(character => (
                            <CharacterCard 
                                id={character.id}
                                name={character.name}
                                key={character.id}
                                image={character.image}
                                handleClick={this.handleClick}
                            />  
                        ))}

                    </GameBoard>

                </Container>
            </div>
        ); //parentheses encapsulate all info to be returned
    }
};

export default App;

// ====== character array shuffler =======
function shuffle(array) {
    console.log(array);
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}  
