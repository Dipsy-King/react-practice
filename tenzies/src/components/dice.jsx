/* eslint-disable react/prop-types */


export default function Dice({value, isSelected, handleClick, id}){

    
    return(
        <button 
            className="dice" 
            id={id}
            style={{backgroundColor : isSelected ? 'green' : 'white' }}
            onClick={handleClick}>
                {value}
            </button>
    )
}