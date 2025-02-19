import {languages} from '../assets/languages.js';

export default function Languages(){

    return(
        <section className='languages-section'>
                <div>
                  {languages.map(language =>{
                    const cssClass = {
                      backgroundColor: language.backgroundColor,
                      color: language.color
                    }
                    return(
                      <span key={language.name} style={cssClass}>{language.name}</span>
                    )
                  })}
                </div>
              </section>
    )
}