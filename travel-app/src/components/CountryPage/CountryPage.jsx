import React from 'react';
import styles from './CountryPage.module.scss'
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player"
import Map from '../Map/Map'

const CountryPage = ({countryCards}) => {
    console.log('chetamDEEEE')
    const { id } = useParams();
    console.log('PARAMS', id)


  const [countryCard] = countryCards.filter((card) =>  card._id === id )

  console.log('ISOCODE', countryCards[id-1].ISOCode)
    return (
        <div className={styles.country}>
            <div className={styles.country__name}>
                {countryCard.localizations[0].name}
            </div>
            <div className={styles.country__capital}>
                {countryCard.localizations[0].capital}
            </div>
            <div className={styles.country__descr}>
                {countryCard.localizations[0].description}
            </div>
            <ReactPlayer
                url={countryCard.videoUrl}
                controls={true}
            />
            <Map coords={countryCard.capitalLocation.coordinates} ISOCode={countryCard.ISOCode}/>
        </div>
    )
}

export default CountryPage;