import React from 'react';
import './styles.css';
import './responsiveStyles';

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="App">
        <h2>City: {weatherData.city}</h2>
        <p>Temperature: {weatherData.temperature.toFixed(1)}°C</p>
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Description: {weatherData.description}</p>
        <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        <p>Sunrise: {weatherData.sunrise}</p>
        <p>Sunset: {weatherData.sunset}</p>
        {/* Additional weather data visualizations or features */}
    </div>
  );
};

export default WeatherInfo;
