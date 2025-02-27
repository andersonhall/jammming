import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = props => {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <Tracklist tracks={props.tracks} onSelectTrack={props.onSelectTrack} icon='+' />
    </div>
  );
};

export default SearchResults;
