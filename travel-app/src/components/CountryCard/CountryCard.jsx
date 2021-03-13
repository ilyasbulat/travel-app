import React from 'react';
import styles from './CountryCard.module.scss'
import { Link } from 'react-router-dom';

const CountryCard = ({card}) => {
    
    return (
        <Link to={`/country/${card.id}`}>
            <div className={styles.card} onClick={() => {
                console.log('IDIWKA', card.id)
            }}>
                <img src="" alt="PICTURE"/>
                <div>
                    {card.id}
                </div>
                <div>
                    {card.localizations[0].name}
                </div>
                <div>
                        {card.localizations[0].capital}
                </div>
                
            </div>
        </Link>

    )
}

export default CountryCard;