import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = props => {
  return (
    <form>
      <input defaultValue={props.playlist.playlistName} />
      <Tracklist
        tracks={props.playlist.tracks}
        name={props.playlist.playlistName}
        onSelectTrack={props.onSelectTrack}
        icon='-'
      />
      <button className='saveBtn'>SAVE TO SPOTIFY</button>
    </form>
  );
};

export default Playlist;
