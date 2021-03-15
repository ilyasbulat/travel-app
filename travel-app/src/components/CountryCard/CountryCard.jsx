import React from 'react';
import styles from './CountryCard.module.scss'
import { Link } from 'react-router-dom';

const CountryCard = ({card}) => {
    
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
                {/* <img src={`${card.imageUrl}`} alt="PICTURE" className={styles.card_img}/> */}
                <div className={styles.card__name}>
                    {card.localizations[0].name}
                </div>
                <div className={styles.card__capital}>
                    {card.localizations[0].capital}
                </div>
                
            </div>
        </Link>

    )
}

export default CountryCard;