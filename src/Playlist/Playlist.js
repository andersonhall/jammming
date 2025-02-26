import React, { useState, useEffect } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = () => {
  const [playlist, setPlaylist] = useState({});
  // dummy data
  const dummyPlaylist = {
    playlistName: 'New Playlist',
    tracks: [
      { id: 1, name: 'Track 4', artist: 'Artist 4', album: 'Album 4' },
      { id: 2, name: 'Track 5', artist: 'Artist 5', album: 'Album 5' },
      { id: 3, name: 'Track 6', artist: 'Artist 6', album: 'Album 6' },
    ],
  };

  useEffect(() => {
    setPlaylist(dummyPlaylist);
  }, []);

  return (
    <form>
      <input defaultValue={playlist.playlistName} />
      <Tracklist tracks={playlist.tracks} name={playlist.playlistName} />
      <button className={styles.playlistSave}>SAVE TO SPOTIFY</button>
    </form>
  );
};

export default Playlist;
