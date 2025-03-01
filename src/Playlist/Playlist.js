import React from 'react';
// import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = props => {
  const handleChange = event => {
    event.preventDefault();
    props.onNameChange(event.target.value);
  };
  const handleSave = event => {
    event.preventDefault();
    const input = document.getElementById('playlistName');
    if (input.value === '') {
      return alert('You must include a playlist name');
    }
    const uris = props.playlist.tracks.map(track => track.uri);
    props.onSavePlaylist(uris);
  };

  return (
    <form action='#'>
      <input
        id='playlistName'
        value={props.playlist.playlistName}
        placeholder='Enter a name for your playlist'
        onChange={handleChange}
        type='text'
      />
      <Tracklist
        tracks={props.playlist.tracks}
        name={props.playlist.playlistName}
        onSelectTrack={props.onSelectTrack}
        icon='-'
      />
      <button className='saveBtn' onClick={handleSave} type='submit'>
        SAVE TO SPOTIFY
      </button>
    </form>
  );
};

export default Playlist;
