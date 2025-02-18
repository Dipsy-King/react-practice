import { useState } from "react";
import Dice from "./Dice";


export default function Dices(){

    const [diceArray, setDiceArray] = useState(generateAllNewDice());
    
    function generateAllNewDice(){
        const randomArray = [];
        for (let i = 0; i < 10; i++) {
            // Generate a random integer between 1 and 6 inclusive
            const randomInt = Math.floor(Math.random() * 6) + 1;
            randomArray.push(randomInt);
        }
    
        return randomArray;
    }


    return(
        <div className='dice-container'>
            {diceArray.map(dice =>{
                return <Dice value={dice} />
            })}
        </div>
    )
}