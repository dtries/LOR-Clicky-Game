import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import characters from "./characters.json";

// shuffle(characters);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guessed: Array(12).fill(null),
            characters,
        }
        // this.getCharInfo = this.getCharInfo.bind(this);
    }

    handleClick = () => {

        console.log(`Clickity!!!`);
        // const guessed = this.state.guessed.slice();
        // guessed[id] = this.state.characters.id;

        // if (pickedAlready(guessed)) {
        //     reset();
        // }
        // this.setState({guessed: guessed});
    }

         
    // every class has a render
    render () {

        shuffle(characters);

        // every render has a return, this is used to set the Character Card images and Title
        return (
            <Container>
                <Title>

                </Title>

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

// ====== Checks to See if that character id has been selected already ======
// function pickedAlready(guessed) {
//     console.log("WILL CHECKED GUESSED ARRAY TO SEE AN CHARACTER ID HAS BEEN GUESSED ALREADY");

// };

// ====== Reset Function ======

// const reset = () => {
//     console.log("RESET SCORE TO 0 and CLEAR GUESSED ARRAY")
// };

  
