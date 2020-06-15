import React, { useState } from 'react';

import searchIcon from './assets/searchIcon.svg';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query && !!query.length) {
      handleSearch(query);
    }
  };

  return (
    <form className="row middle full-width searchbar" onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        className="searchbar__input"
        onChange={handleChange}
      />
      <button type="submit" className="searchbar__button">
        <img className="searchbar__icon" src={searchIcon} alt="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
