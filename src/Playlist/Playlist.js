import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = props => {
  const handleChange = event => {
    event.preventDefault();
    props.onNameChange(event.target.value);
  };
  return (
    <form action='#'>
      <input id='playlistName' value={props.playlist.playlistName} onChange={handleChange} />
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
