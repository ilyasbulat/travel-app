import React, { useState, useEffect, useMemo } from 'react';

import styles from './CountryPage.module.scss'
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player"
import Map from '../Map/Map'
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';


const CountryPage = ({countryCards}) => {
    const { id } = useParams();
    
    const [temperature, setTemperature] = useState('');
    const [weatherDescr, setWeatherDescr] = useState('')
    const [icon, setIcon] = useState('')
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [countryCard] = countryCards.filter((card) =>  card._id === id )
    const [currency, setCurrency] = useState({})
    let region = countryCard.localizations[0].name
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour:'numeric', 
      minute:'numeric', 
      second:'numeric', 
      timeZone: 'Europe/Athens' 
    };
    if (region === 'Italy') {
      options.timeZone = 'Europe/Rome'
    } else if (region === 'Greece') {
      options.timeZone = 'Europe/Athens'
    } else if (region === 'Spain') {
      options.timeZone = 'Europe/Madrid'
    } else if (region === 'United Kingdom') {
      options.timeZone = 'Europe/London'
    } else if (region === 'France') {
      options.timeZone = 'Europe/Paris'
    } else if (region === 'Kazakhstan') {
      options.timeZone = 'Asia/Almaty'
    } else if (region === 'South Korea') {
      options.timeZone = 'Asia/Seoul'
    } else if (region === 'Japan') {
      options.timeZone = 'Asia/Tokyo'
    }
    const [date,setDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);



  async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryCard.localizations[0].name}&lang=en&appid=29055efa6dd5987fbe326348106401e0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
 
    console.log('dataWEATHER', data)
    console.log('WEEEEATHEEEER')
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

  }
  // useMemo(() => getWeather(), [])
  // getWeather()
  useEffect(() => {
    getWeather()
  }, [])
  
  
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/65c2e6f8077d2473c6ef91a6/latest/${countryCard.currency}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((data) => setCurrency(data))

      console.log('CURRENCY', currency)
  }, [])

 
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
            <div className={styles.weather_widget}>

              { icon === 'Sunny' ? <Sunny/> : icon === 'Cloudy' ? <Cloudy/> : icon === 'Rain' ? <Rain/> : icon === 'Snow' ? <Snow/> :null }
                <div>
                  {weatherDescr}
                </div>
                <div>
                  {temperature}°C
                </div>
                <div>
                  {humidity}% humidity
                </div>
                <div>
                  {windSpeed} m/s
                </div>
            </div>

          <div className={styles.currency}>
            <div>Currency: {countryCard.currency}</div>
            {
              currency.conversion_rates ? 
              <div>
                <div>
                  1 {countryCard.currency} = {currency.conversion_rates.USD}$
                </div>
                <div>
                  1$ = {(1/currency.conversion_rates.USD).toFixed(2)} {countryCard.currency}
                </div>
              </div>  : ''
            }
            
          </div>

          <div className={styles.time}>
            {date.toLocaleDateString('en-EN', options)}
          </div>


        </div>
    )
}

export default CountryPage;