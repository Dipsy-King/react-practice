/* eslint-disable react/prop-types */


export default function Dice({value, isSelected, handleClick, id, gameWon}){

    
    return(
        <button 
            className="dice" 
            id={id}
            style={{backgroundColor : isSelected ? 'green' : 'white' }}
            onClick={handleClick}
            disabled={gameWon}>
                {value}
            </button>
    )
}