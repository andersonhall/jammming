import React from 'react';
import styles from './Track.module.css';

const Track = props => {
  const handleClick = event => {
    event.preventDefault();
    props.onSelectTrack(props.track);
  };

  return (
    <div className={styles.track}>
      <h3>{props.track.name}</h3>
      <p>
        {props.track.artist} | {props.track.album}
      </p>
      <button id={props.track.id} onClick={handleClick}>
        {props.icon}
      </button>
    </div>
  );
};

export default Track;
