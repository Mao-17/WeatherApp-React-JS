import React, { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';
import WeatherInfo from './WeatherInfo';
import ErrorHandler from './ErrorHandler';
import Loader from './Loader';
import './responsiveStyles';
import './styles.css';


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchWeatherData = (city) => {
      setLoading(true);
  
      // Make API request to fetch weather data
      // Replace `YOUR_API_KEY` with your actual OpenWeatherMap API key
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffb80465d30e1b05472eb670f8213bbd`)
        .then((response) => response.json())
        .then((data) => {
          const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
          const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
  
          setWeatherData({
            city: data.name,
          temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
          humidity: data.main.humidity,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          sunrise: sunriseTime,
          sunset: sunsetTime, // Chance of rain (1-hour forecast)
        });
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
  
    const handleSubmit = (city) => {
      if (city.trim() !== '') {
        fetchWeatherData(city);
      }
    };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form onFormSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorHandler error={error} />}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;