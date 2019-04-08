import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
    //state is set to the characters json array
    state = {
        characters
    };

    // every class has a render
    render () {

        // every render has a return, this is used to set the Character Card images and Title
        return (
            <Container>
                <Title>

                </Title>
                {this.state.characters.map(character => (
                    <CharacterCard 
                        id={character.id}
                        key={character.id}
                        image={character.image}
                     />    
                ))}
            </Container>
        ); //parentheses encapsulate all info to be returned
    }
};

export default App;
