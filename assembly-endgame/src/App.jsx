import { useState } from 'react';
import './App.css'
import { languages } from './assets/languages';

function App() {

  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);


  function handleSelectedLetter(event){
    const newLetter = event.currentTarget.value;
    setGuessedLetters(prevState =>{
      const newArray = [...prevState];
      return newArray.includes(newLetter) ? newArray : [...prevState, newLetter]
    })
  }

  const currentWordArray = currentWord.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className='game-status'>
        <h2>You Won</h2>
        <p>Well done</p>
      </section>

      <section className='languages-section'>
        <div>
          {languages.map(language =>{
            const cssClass = {
              backgroundColor: language.backgroundColor,
              color: language.color
            }
            return(
              <span key={language.name} style={cssClass}>{language.name}</span>
            )
          })}
        </div>
      </section>

      <section className='secret-word'>
          {currentWordArray.map(letter =>{
            return(
              <span key={letter}>{letter.toUpperCase()}</span>
            )
          })}
      </section>

      <section className='keyboard-section'>
        <div>
          {alphabet.split('').map(letter =>{
            let classes = 'alphabet-button';
            const isCorrect = guessedLetters.includes(letter.toUpperCase()) && currentWordArray.includes(letter);
            const isIncorrect = guessedLetters.includes(letter.toUpperCase()) && !currentWordArray.includes(letter);
            if(isCorrect) classes += ' correct';
            if(isIncorrect) classes += ' incorrect';

            return(
              <button 
                className={classes}
                key={letter} 
                onClick={handleSelectedLetter} 
                value={letter.toUpperCase()}>
                  {letter.toUpperCase()}
                </button>
            )
          })}
        </div>
      </section>

      <section className='new-game-button-container'>
        <button className='new-game' >New Game</button>
      </section>

    </>
  )
}

export default App
