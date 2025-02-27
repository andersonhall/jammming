import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = props => {
  return (
    <div className={styles.tracklist}>
      {props.tracks.map(track => {
        return (
          <Track
            track={track}
            key={track.id}
            onSelectTrack={props.onSelectTrack}
            icon={props.icon}
          />
        );
      })}
    </div>
  );
};

export default Tracklist;
