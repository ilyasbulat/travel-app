import React from 'react';
import styles from './MainPage.module.scss'
import CountryCard from '../CountryCard/CountryCard'
import AnimatedBg from "react-animated-bg";

const MainPage = ({countryCards}) => {

    const imagesList = [
        'url("https://rs-travel-app-api.herokuapp.com/images/italy/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/uk/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/spain/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/greece/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/qazaqstan/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/france/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/korea/main.webp")',
        'url("https://rs-travel-app-api.herokuapp.com/images/japan/main.webp")'
    ];
    console.log('chetam', countryCards)
    return (
        <AnimatedBg
        colors={imagesList}
        duration={2}
        delay={1}
        timingFunction="ease-out"
        style = {{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
      >
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    countryCards.map(card => {
                        return <CountryCard key={card._id} card={card}/>
                    })
                }
             </div>
        </div>
      </AnimatedBg>


    )
}

export default MainPage;