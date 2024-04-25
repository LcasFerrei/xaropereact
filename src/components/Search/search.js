// src\components\Search\search.js

import React, { useState } from 'react';
import './search.css'; // Importando o arquivo CSS para estilização

function Search({ data }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    const filteredResults = data.filter(item => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={search}
          className="search-input"
        />
        <i className='bx bx-search search-icon'></i> {/* Adicionando o ícone bx-search */}
      </div>
      <ul className="search-results">
        {results.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
