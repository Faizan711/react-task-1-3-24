// src/components/RecentSearches.js
import React from 'react';

function RecentSearches({ history, onSearch }) {
  return (
    <div>
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
