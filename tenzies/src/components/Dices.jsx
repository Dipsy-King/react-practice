import { useState } from "react";
import Dice from "./Dice";
import { nanoid } from 'nanoid'


export default function Dices(){

    const [diceArray, setDiceArray] = useState(generateAllNewDice());
    
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
        const existDiceSelected = diceArray.find(die => die.isSelected === true);

        if (existDiceSelected) {
            setDiceArray(prevState => {
                return prevState.map(dice =>{
                    const randomInt = Math.floor(Math.random() * 6) + 1;
                    return !dice.isSelected ? {
                        ...dice,
                        value: randomInt
                    }: dice
                })
            })
        }else{
            setDiceArray(generateAllNewDice);
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
        console.log(diceArray);
    }


    return(<>
        <div className='dice-container'>
            {diceArray.map(dice =>(
                <Dice 
                    key={dice.id}
                    id ={dice.id}
                    value={dice.value} 
                    isSelected= {dice.isSelected} 
                    handleClick={selectDice}
                />
            ))}
        </div>
        <button className="roll-button" onClick={rollDice}>Roll</button>
    </>
        
    )
}