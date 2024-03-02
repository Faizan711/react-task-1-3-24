// src/components/WeatherDisplay.js
import React, { useState } from 'react';

function WeatherDisplay({ weather }) {
  const [unit, setUnit] = useState('Celsius');

  const toggleUnit = () => {
    setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius');
  };

  const convertedTemp = unit === 'Celsius' ? weather.temperature : (weather.temperature * 9) / 5 + 32;

  return (
    <div>
      <h2>{weather.city}</h2>
      <p>Temperature: {convertedTemp}°{unit}</p>
      <p>Conditions: {weather.conditions}</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <button onClick={toggleUnit}>Toggle Unit</button>
    </div>
  );
}

export default WeatherDisplay;
