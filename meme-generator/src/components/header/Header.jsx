//assets
import logo from '../../assets/logo.png'
//css
import classes from './Header.module.css'


export default function Header(){

    return(<>
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="meme logo"/>
            <h1>Meme Generator</h1>
        </header>
    </>)
}