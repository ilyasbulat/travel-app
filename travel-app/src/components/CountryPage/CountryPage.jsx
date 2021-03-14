import React, { useState, useMemo } from 'react';

import styles from './CountryPage.module.scss'
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player"
import Map from '../Map/Map'
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';


const CountryPage = ({countryCards}) => {
    const { id } = useParams();
    console.log('PARAMS', id)
    const [temperature, setTemperature] = useState('');
    const [weatherDescr, setWeatherDescr] = useState('')
    const [icon, setIcon] = useState('')
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
  const [countryCard] = countryCards.filter((card) =>  card._id === id )

  async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryCard.localizations[0].name}&lang=en&appid=29055efa6dd5987fbe326348106401e0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
 

    try {
      console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
      setTemperature(data.main.temp)
      setWeatherDescr(data.weather[0].description)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
      // setIcon(`owf-${data.weather[0].id}`)
      if (weatherDescr.includes('clear')) {
        setIcon('Sunny')
      } else if (weatherDescr.includes('cloud')) {
        setIcon('Cloudy')
      } else if (weatherDescr.includes('mist') || weatherDescr.includes('rain')) {
        setIcon('Rain')
      } else if (weatherDescr.includes('snow')) {
        setIcon('Snow')
      } else {
        setIcon('Cloudy')
      }
      console.log("ICON", icon)
    } catch {
      console.log('Chet s APIWKOI')
    }

    // weatherIcon.className = 'weather-icon owf';
    // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    // temperature.textContent = `${data.main.temp}°C`;
    // weatherDescription.textContent = data.weather[0].description;
    // humidity.textContent = `${data.main.humidity}% влажности`;
    // windSpeed.textContent = `${data.wind.speed} м/c`;

  }
  // useMemo(() => getWeather(), [])
  getWeather()



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
            <div>

            { icon === 'Sunny' ? <Sunny/> : icon === 'Cloudy' ? <Cloudy/> : icon === 'Rain' ? <Rain/> : icon === 'Snow' ? <Snow/> :null }
              <div>
                {weatherDescr}
              </div>
              <div>
                {temperature}°C
              </div>
              <div>
                {humidity}% влажности
              </div>
              <div>
                {windSpeed} м/c
              </div>
            </div>
        </div>
    )
}

export default CountryPage;