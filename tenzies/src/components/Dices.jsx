import { useState } from "react";
import Dice from "./Dice";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


export default function Dices(){

    // useState(() => generateAllNewDice()) - makes sure it only runs 1
    // useState(generateAllNewDice()); - ran every a dice was clicked
    const [diceArray, setDiceArray] = useState(() => generateAllNewDice());


    const gameWon = (diceArray.every(dice => dice.isSelected) && diceArray.every(dice => dice.value === diceArray[0].value))
    //  checking if game won
    


    
    function generateAllNewDice(){
        const randomArray = [];
        for (let i = 0; i < 10; i++) {
            // Generate a random integer between 1 and 6 inclusive
            const randomInt = Math.floor(Math.random() * 6) + 1;
            randomArray.push({
                value: randomInt,
                isSelected: false,
                id: nanoid()
            });
        }
        return randomArray;
    }

    function rollDice(){
       if(gameWon){
            console.log('makes new game');
            setDiceArray(generateAllNewDice);
       } else{
            setDiceArray(prevState => {
                return prevState.map(dice =>{
                    const randomInt = Math.floor(Math.random() * 6) + 1;
                    return !dice.isSelected ? {
                        ...dice,
                        value: randomInt
                    }: dice
                })
            })
       }
    }

    function selectDice(event){
        const selectedIdDice = event.target.id;
        
        setDiceArray(prevState =>{
            return prevState.map(dice =>(
                dice.id === selectedIdDice ? 
                {
                    ...dice,
                    isSelected: !dice.isSelected
                } 
                : dice
            ))
        })
        //console.log(diceArray);
    }


    return(<>
        {gameWon && <Confetti></Confetti>}
        <div className='dice-container'>
            {diceArray.map(dice =>(
                <Dice 
                    gameWon={gameWon}
                    key={dice.id}
                    id ={dice.id}
                    value={dice.value} 
                    isSelected= {dice.isSelected} 
                    handleClick={selectDice}
                />
            ))}
        </div>
        <button className="roll-button" onClick={rollDice}>{gameWon ? 'New game?' : 'Roll'}</button>
    </>
        
    )
}