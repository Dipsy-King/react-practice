
import { useEffect, useState } from 'react'
import classes from './Main.module.css'

export default function Main(){


    //  setting the initial state
    const [memeState, setMemeState] = useState({
        topText: 'one does not simply',
        bottomText: 'walk into mordor',
        img: "http://i.imgflip.com/1bij.jpg"
    })



    //  fetching data
    useEffect(()=>{

        const fetchMemeData = async () => {

            try {
               // fetching data from api
                const response = await fetch('https://api.imgflip.com/get_memes');
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                // parse json
                const data = await response.json();
                console.log(data)

            } catch (error) {
                //handle error
            } finally {
                // manage loading
            }
        }



    },[])





    //  handle user input change
    function handleMemeState(event){
        setMemeState(prevState =>{
            return{
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }



    return (
        <main className={classes.mainContent}>
            <div className={classes.userInput}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={memeState.topText}
                        onChange={handleMemeState}
                        maxLength={30}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={memeState.bottomText}
                        onChange={handleMemeState}
                        maxLength={30}
                    />
                </label>    
            </div>
            <button className={classes.memeButton}>Get a new meme image 🖼</button>
            <div className={classes.meme}>
                <img src={memeState.img} />
                <span className={classes.topText}>{memeState.topText}</span>
                <span className={classes.bottomText}>{memeState.bottomText}</span>
            </div>
        </main>
    )
}