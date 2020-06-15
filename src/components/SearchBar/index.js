import React, { useState } from 'react';
import cn from 'classnames';

import searchIcon from './assets/searchIcon.svg';

import styles from './styles.module.scss';

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
    <form
      className={cn('row middle full-width', styles.container)}
      onSubmit={handleSubmit}
    >
      <input
        name="query"
        type="text"
        className={styles.input}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        <img className={styles.icon} src={searchIcon} alt="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
