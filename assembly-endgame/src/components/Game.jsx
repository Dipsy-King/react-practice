import { useState } from "react";
import Keyboard from "./Keyboard";
import Secret from "./Secret";
import Languages from "./Languages";
import GameStatus from "./GameStatus";
import { languages } from "../assets/languages.js";
import { getFarewellText } from "../utils";
import { words } from "../assets/words.js";

export default function Game() {
	//  state
	const [currentWord, setCurrentWord] = useState("react");
	const [guessedLetters, setGuessedLetters] = useState([]);

	//  derived values
	const wrongGuessesCounter = guessedLetters.filter((letter) => !currentWord.includes(letter)).length;
	const isWinner = currentWord.split("").every((letter) => guessedLetters.includes(letter));
	const isLoser = wrongGuessesCounter >= 8;
	const isLastLetterWrong = guessedLetters[guessedLetters.length - 1] && !currentWord.includes(guessedLetters[guessedLetters.length - 1]);

	//
	const currentWordArray = currentWord.split("");
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	/* console.log("guessedLetter", guessedLetters);
	console.log("wrongGuessesCounter", wrongGuessesCounter);
	console.log("isloser", isLoser); */

	function handleSelectedLetter(letter) {
		setGuessedLetters((prevState) => (prevState.includes(letter) ? prevState : [...prevState, letter]));
	}

	function showMessage() {
		let message;
		//game over
		if (isLoser || isWinner) {
			message = {
				title: isWinner ? "You Won" : "You Lost",
				text: isWinner ? "Well Done" : "Try again",
				css: isWinner ? "won" : "lost",
			};
			return message;
		}
		//still playing
		if (!isLoser || !isWinner) {
			if (isLastLetterWrong) {
				//   wrong letter
				return {
					title: getFarewellText(languages[wrongGuessesCounter - 1].name),
					css: "farewell",
				};
			} else {
				//  right letter
				return { css: "hidden" };
			}
		}
	}

	function getNewWord() {
		setCurrentWord(words[Math.floor(Math.random() * words.length)]);
		console.log(currentWord);
		setGuessedLetters([]);
	}

	return (
		<>
			<GameStatus message={showMessage} />

			<Languages languages={languages} wrongGuessesCounter={wrongGuessesCounter} />

			<Secret currentWordArray={currentWordArray} guessedLetters={guessedLetters} />

			<Keyboard
				alphabet={alphabet}
				isGameOver={isLoser || isWinner}
				currentWordArray={currentWordArray}
				guessedLetters={guessedLetters}
				handleSelectedLetter={handleSelectedLetter}
			/>

			{(isLoser || isWinner) && (
				<section className="new-game-button-container">
					<button className="new-game" onClick={getNewWord}>
						New Game
					</button>
				</section>
			)}
		</>
	);
}
