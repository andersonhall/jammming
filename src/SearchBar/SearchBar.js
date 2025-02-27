import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <input type='text' placeholder='Enter A Song, Album, or Artist' id='searchInput' />
      <button className={styles.searchButton}>SEARCH</button>
    </form>
  );
};

export default SearchBar;
