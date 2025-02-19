/* eslint-disable react/prop-types */


export default function Secret ({currentWordArray, guessedLetters}){

    return(
        <section className='secret-word'>
            {currentWordArray.map(letter =>{
            return(
                <span key={letter}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ''}</span>
            )
            })}
        </section>
    )
}