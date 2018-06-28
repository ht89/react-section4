import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        inputLength: '',
        input: '',
        chars: []
    };

    textChangeHandler = (event) => {
        this.setState({
            input: event.target.value,
            inputLength: event.target.value.length
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
        const characters = this.state.input.split('');

        let charEls = null;
        if (this.state.inputLength > 0) {
            charEls = (
                characters.map((char, index) => {
                    return <Char
                        letter={char} 
                        key={index}
                        delete={() => this.characterDeleteHandler(index)} />;
                })
            );
        }

        return (
            <div className="App">
                <input type="text" onChange={(event) => this.textChangeHandler(event)} value={this.state.input}/>

                <p>Input length: {this.state.inputLength}</p>

                <Validation length={this.state.inputLength} />

                {charEls}
            </div>
        );
    }
}

export default App;
