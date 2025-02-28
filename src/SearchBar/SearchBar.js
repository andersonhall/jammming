import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const handleSearch = event => {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    if (searchInput.value === '') return;
    props.onSearch(searchInput.value);
    searchInput.value = '';
  };

  return (
    <form action='#' className={styles.searchBar}>
      <input type='text' placeholder='Enter A Song, Album, or Artist' id='searchInput' />
      <button className={styles.searchButton} onClick={handleSearch}>
        SEARCH
      </button>
    </form>
  );
};

export default SearchBar;
