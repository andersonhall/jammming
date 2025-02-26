import React, { useState, useEffect } from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = () => {
  const [searchTracks, setSearchTracks] = useState([]);

  // dummy data
  const dummyTracks = [
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
  ];

  useEffect(() => {
    setSearchTracks(dummyTracks);
  }, []);

  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <Tracklist tracks={searchTracks} />
    </div>
  );
};

export default SearchResults;
