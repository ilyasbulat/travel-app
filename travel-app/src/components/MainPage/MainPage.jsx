import React from 'react';
import styles from './MainPage.module.scss'
import CountryCard from '../CountryCard/CountryCard'

const MainPage = ({countryCards}) => {

    console.log('chetam', countryCards)
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    countryCards.map(card => {
                        return <CountryCard key={card._id} card={card}/>
                    })
                }
             </div>
        </div>

    )
}

export default MainPage;