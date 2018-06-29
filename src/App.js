import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        input: '',
        chars: []
    };

    textChangeHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    characterDeleteHandler = (index) => {
        const characters = this.state.input.split('');
        const characterIndex = characters.findIndex((char, charIndex) => charIndex === index);
        console.log(characterIndex);

        characters.splice(characterIndex, 1);

        const updatedInput = characters.join('');
        const updatedChars = characters;

        this.setState({
            input: updatedInput,
            inputLength: updatedInput.length,
            chars: updatedChars
        });
    }

    render() {
        const charList = this.state.input.split('').map((char, index) => {
            return <Char
            letter={char} 
            key={index}
            delete={() => this.characterDeleteHandler(index)} />;
        });

        return (
            <div className="App">
                <input type="text" onChange={(event) => this.textChangeHandler(event)} value={this.state.input}/>

                <p>{this.state.input}</p>

                <Validation length={this.state.input.length} />

                {charList}
            </div>
        );
    }
}

export default App;
