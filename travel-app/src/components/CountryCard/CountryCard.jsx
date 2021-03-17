import React, { useState, useEffect, useContext } from 'react';
import styles from './CountryCard.module.scss'
import { Link } from 'react-router-dom';
import { LangContext } from '../../App'
const CountryCard = ({card}) => {
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
    const [number,setNumber] = useState(0);
    // const [state, setState] = useState(useContext(LangContext))
    let context = useContext(LangContext)
    console.log('conxtext', context)
    useEffect(() => {
        if (lang === 'ru') {
            setNumber(1)
        } else if (lang === 'fr') {
            setNumber(2)
        } else if (lang === 'en') {
            setNumber(0)
        }
    }, [context])
    


    return (
        <Link to={`/country/${card._id}`} className={styles.main}>
            <div className={styles.card} style={{ 
                backgroundImage: `url(${card.imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // width:'250px',
                // height: '320px' 
                width: '100%',
                height: '100%'
              }}>
   
                <div className={styles.card__name}>
                    {card.localizations[number].name}
                </div>
                <div className={styles.card__capital}>
                    {card.localizations[number].capital}
                </div>
                
            </div>
        </Link>

    )
}

export default CountryCard;