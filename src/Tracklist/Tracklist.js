import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({ tracks = [] }) => {
  return (
    <div className={styles.tracklist}>
      {tracks.map(track => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
};

export default Tracklist;
