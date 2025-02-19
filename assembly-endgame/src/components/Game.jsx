import { useState } from 'react';
import Keyboard from './Keyboard';
import Secret from './Secret';
import Languages from './Languages';


export default function Game(){

    const [currentWord, setCurrentWord] = useState('react');
    const [guessedLetters, setGuessedLetters] = useState([]);
    
    const currentWordArray = currentWord.split("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    console.log(guessedLetters);
  
  
    function handleSelectedLetter(letter){
      setGuessedLetters(prevState =>
        prevState.includes(letter) ? prevState : [...prevState, letter]
      )
    }
  

    return(<>
        <section className='game-status'>
            <h2>You Won</h2>
            <p>Well done</p>
        </section>

        <Languages />

        <Secret currentWordArray={currentWordArray} guessedLetters={guessedLetters}/>

        <Keyboard alphabet={alphabet} currentWordArray={currentWordArray} guessedLetters={guessedLetters} handleSelectedLetter={handleSelectedLetter}/>

        <section className='new-game-button-container'>
            <button className='new-game' >New Game</button>
        </section>
    </>)
}