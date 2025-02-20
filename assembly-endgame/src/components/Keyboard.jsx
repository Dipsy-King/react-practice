/* eslint-disable react/prop-types */

export default function Keyboard({ alphabet, isGameOver, guessedLetters, currentWordArray, handleSelectedLetter }) {
	return (
		<section className="keyboard-section">
			<div>
				{alphabet.split("").map((letter) => {
					let classes = "alphabet-button";
					const isCorrect = guessedLetters.includes(letter) && currentWordArray.includes(letter);
					const isIncorrect = guessedLetters.includes(letter) && !currentWordArray.includes(letter);
					if (isCorrect) classes += " correct";
					if (isIncorrect) classes += " incorrect";

					return (
						<button className={classes} disabled={isGameOver} key={letter} onClick={() => handleSelectedLetter(letter)} value={letter.toUpperCase()}>
							{letter.toUpperCase()}
						</button>
					);
				})}
			</div>
		</section>
	);
}
