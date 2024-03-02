import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import RecentSearches from './components/RecentSearches';
import './App.css'
import Snackbar from './components/Snackbar';

function App() {

  const [weather, setWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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
    let errorMessage = 'An unexpected error occurred. Please try again later.';

    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        errorMessage = 'Bad Request. Please check your input and try again.';
      } else if (status === 401) {
        errorMessage = 'Unauthorized. Please provide a valid API token.';
      } else if (status === 404) {
        errorMessage = 'Not Found. Data with requested parameters does not exist.';
      } else if (status === 429) {
        errorMessage = 'Too Many Requests. Please wait before trying again.';
      } else if (status >= 500 && status < 600) {
        errorMessage = 'Unexpected Error. Please contact support.';
      }
    } else if (error.request) {
      errorMessage = 'No response received. Please check your internet connection.';
    } else {
      errorMessage = 'Error setting up request. Please try again later.';
    }

    setSnackbarMessage(errorMessage);
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
      {snackbarMessage && <Snackbar message={snackbarMessage} />}
    </div>
    </>
  )
}

export default App
