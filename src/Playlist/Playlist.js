import React from 'react';
import styles from './Playlist.module.css';

const Playlist = () => {
  return (
    <form>
      <input defaultValue={'New Playlist'} />
      <button className={styles.playlistSave}>SAVE TO SPOTIFY</button>
    </form>
  );
};

export default Playlist;
