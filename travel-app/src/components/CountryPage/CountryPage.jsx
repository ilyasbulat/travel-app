import React, { useState, useEffect, useMemo } from 'react';

import styles from './CountryPage.module.scss'
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player"
import Map from '../Map/Map'
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import { Parallax } from 'react-parallax';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const CountryPage = ({countryCards}) => {
    const { id } = useParams();
    const [countryCard, setCountryCard] = useState({})
    // console.log('IDIWKA CHETAM', id)
    const [temperature, setTemperature] = useState('');
    const [weatherDescr, setWeatherDescr] = useState('')
    const [icon, setIcon] = useState('')
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    // const [countryCard] = countryCards.filter((card) =>  card._id === id )
    const [currency, setCurrency] = useState({})
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
    const [number,setNumber] = useState(0);
    const [sight, setSight] = useState([])

   
    useEffect(() => {
      fetch(
        `https://rs-travel-app-api.herokuapp.com/country/${id}`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => setCountryCard(data))

       
    }, [])
    // console.log('CAAAAARD', countryCard)
    let region = '';
    if (countryCard.length > 1) {
      region = countryCard.localizations[0].name
    }
    // let region = countryCard.localizations[0].name
    // let region = 'Italy'
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryCard.localizations[0].capital}&lang=${lang}&appid=29055efa6dd5987fbe326348106401e0&units=metric`;
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

    } catch {
      console.log('Chet s APIWKOI')
    }

  }
  // useMemo(() => getWeather(), [])
  // getWeather()
  useEffect(() => {
    if (Object.keys(countryCard).length === 0 && countryCard.constructor === Object) {
      return;
    }
    getWeather()
    console.log("CHEEEECKWEATHER")
  }, [countryCard])
  
  useEffect(() => {
    if (weatherDescr.includes('clear') || weatherDescr.includes('ясно') || weatherDescr.includes('ciel')) {
      setIcon('Sunny')
      console.log("ICON242424CHETA<asd", icon)
    } else if (weatherDescr.includes('cloud')) {
      setIcon('Cloudy')
    } else if (weatherDescr.includes('mist') || weatherDescr.includes('rain') || weatherDescr.includes('пасмурно') 
    || weatherDescr.includes('couvert') || weatherDescr.includes('pluie')) {
      setIcon('Rain')
    } else if (weatherDescr.includes('snow')) {
      setIcon('Snow')
    } else {
      setIcon('Cloudy')
      console.log("ICON242424", icon)
    }
  }, [weatherDescr])
  
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
  }, [countryCard])



  useEffect(() => {
      if (lang === 'ru') {
          setNumber(1)
      } else if (lang === 'fr') {
          setNumber(2)
      } else if (lang === 'en') {
          setNumber(0)
      }
  }, [lang])


  useEffect(() => {
    fetch(
      `https://rs-travel-app-api.herokuapp.com/countries/${id}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((data) => setSight(data))

      
  }, [])
 
    return (
      <>
      {
      Object.keys(countryCard).length === 0 && countryCard.constructor === Object ? '' :
      <Parallax blur={1} bgImage={countryCard.imageUrl} bgImageAlt="the cat" strength={-500}>
        <div className={styles.country} style={{ 
        // backgroundImage: `url(${countryCard.imageUrl})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // // width:'250px',
        // // height: '320px' 
        // width: '100%',
        // height: '100%'
      }}>
         <div className={styles.main}>
           <div className={styles.main__text}>
            <div className={styles.country__name}>
                  {countryCard.localizations[number].name}
              </div>
              <div className={styles.country__capital}>
                  {countryCard.localizations[number].capital}
              </div>
              <div className={styles.country__descr}>
                  {countryCard.localizations[number].description}
              </div>
           </div>

            <ReactPlayer
                url={countryCard.videoUrl}
                controls={true}
                className={styles.main__player}
                width= '100%'
            />
           
          <div className={styles.Alice}>

           {
                sight.length === 0 ? '' : 
                <AliceCarousel autoPlay mouseTracking autoPlayInterval="3000" disableButtonsControls='true' styles={{
                  marginTop: "10px"
                }}>
                {
                  sight.map((item) => {
                    return (
                      <div>
                      <img src={item.imageUrl} className={styles.sliderimg} alt=""/>
                      <div className={styles.descr}>{item.localizations[number].description}</div>
                      </div>
                    )
                  })
            
                }
  
              </AliceCarousel>
            }

          </div>  
            


          <Map coords={countryCard.capitalLocation.coordinates} ISOCode={countryCard.ISOCode}/>



         </div>

        <div className={styles.widgets}>
            <div className={styles.weather_widget}>

            { icon === 'Sunny' ? <Sunny/> : icon === 'Cloudy' ? <Cloudy/> : icon === 'Rain' ? <Rain/> : icon === 'Snow' ? <Snow/> :null }
              <div>
                {weatherDescr}
              </div>
              <div>
                {temperature}°C
              </div>
              <div>
                {lang ==='ru' ? `${humidity}% влажности` : lang === 'fr' ? `${humidity}% d'humidité` : `${humidity}% humidity`}
              </div>
              <div>
               
                {lang ==='ru' ? `${windSpeed} м/c` : `${windSpeed} m/s`}
              </div>
            </div>

            <div className={styles.currency}>
            <div>{lang ==='ru' ? 'Валюта' : lang ==='fr' ? 'Devise' : 'Currency'}: {countryCard.currency}</div>
            
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
            {date.toLocaleDateString(`${lang}-EN`, options)}
            </div>
        </div>


      </div>
      </Parallax>
    
    }     
      </>
      
    )
}

export default CountryPage;