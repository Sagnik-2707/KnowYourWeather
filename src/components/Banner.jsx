import React from 'react'
import weather_forecast from '../assets/weather_forecast.jpg';
function Banner() {
  return (
    <div className="banner">
        <img src={weather_forecast} alt="Weather Forecast Banner" className="banner-img" />
    </div>
  )
}

export default Banner;