import Dices from "./Dices";


export default function Game(){
    return(<>
        <div className='game-container'>
            <p className="description">
              Roll until all dice are the same.<br />
              Click each die to freeze it at its current value between rolls.
            </p>
            <Dices />
          </div> 
    </>)
}