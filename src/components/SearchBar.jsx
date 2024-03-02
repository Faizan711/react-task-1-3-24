// src/components/SearchBar.js
import React, { useState } from 'react';
import '../App.css'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city); // Pass the city to the parent component
    setCity(''); //clear field after search
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;