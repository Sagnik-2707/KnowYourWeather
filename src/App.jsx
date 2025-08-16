import React,{ useEffect, useState } from 'react'
import './App.css';
function App() {
  const API_KEY = '9e8b88202a38eb386defccad33535aa0';
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');
  const[showResult, setShowResult] = useState(false);
  useEffect(() => {
    // const savedCity = localStorage.getItem('city');
    // const savedWeather = localStorage.getItem('weather');

    // if(savedCity)
    //   setCity(savedCity);
    // if(savedWeather)
    //   setWeather(JSON.parse(savedWeather));
    setShowResult(false);
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather =  async () => {
  try
  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    const data = await(response.json());
    setWeather(data);
    setError('');
    setShowResult(true);
    localStorage.setItem('city', city);
    localStorage.setItem('weather', JSON.stringify(weather));
  }
  catch(err)
  {
    setError(err.message);
    setWeather(null);
  }
};
  return (
      
      <div class = "main-box">
        {console.log('The city is', city)}
        <input type="text" placeholder="Enter city here" class="center-input" value={city} onChange={handleChange}></input>
        <br/> <br/>
        <button onClick={fetchWeather}>Get Weather</button>
        {showResult &&(
        <div> 
          <p>Temperature : {weather?.main?.temp} °C</p>
          <p>Conditions : {weather?.weather[0]?.description}</p>
          <p>Wind Speed: {weather?.wind?.speed}m/s</p>
          <p>Humidity: {weather?.main?.humidity}%</p>
        </div>)
        }
      </div>
      
  );
}   


export default App;
