import React from 'react'
import './Weather.style.css'

const Weather = ({weatherData}) => {

  const Kelvin = Number(weatherData ?.main.temp);
  const Celsius = Math.floor(Kelvin - 273.15)
  const Fahrenheit = Math.floor((Kelvin - 273.15) * 9/5 + 32);




  return (
    <div className='weather-info'>
      <h1>{weatherData ?.name}</h1>
      <h2>섭씨{Celsius}°C / 화씨{Fahrenheit}°F</h2>
      <h2>{weatherData ?.weather[0].main}</h2>
      <h2>{weatherData ?.weather[0].description}</h2>
    </div>
  )
}

export default Weather
