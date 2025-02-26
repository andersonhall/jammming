import React from 'react';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <p>
        This will map through tracks that are returned from the API and display them individually in
        a scrolling column.
      </p>
    </div>
  );
};

export default SearchResults;
