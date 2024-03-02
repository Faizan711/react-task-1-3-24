// src/components/RecentSearches.js
import React from 'react';
import '../App.css'

function RecentSearches({ history, onSearch }) {
  return (
    <div className="recent-searches-container">
      <h3>Recent Searches:</h3>
      <ul>
        {history.map((city) => (
          <li key={city} onClick={() => onSearch(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentSearches;
