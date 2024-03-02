import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import RecentSearches from './components/RecentSearches';
import './App.css'

function App() {

  const [weather, setWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b41164dd51462550102fa04308bd6b74`
      );
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        conditions: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,
      });
      setSearchHistory((prevHistory) => [city, ...prevHistory.slice(0, 4)]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Alert('Error fetching weather data:', error)
      // Handle error (display a message to the user)
    }
  };

  return (
    <>
      <h1>Weather Help</h1>
      <p>Get Info for any place you want!</p>
      <div>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
      <RecentSearches history={searchHistory} onSearch={handleSearch} />
    </div>
    </>
  )
}

export default App
