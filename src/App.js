import './App.css';
import './SearchResults/SearchResults.module.css';
import './Playlist/Playlist.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import { useState } from 'react';

function App() {
  const [searchTracks, setSearchTracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4' },
    { id: 5, name: 'Track 5', artist: 'Artist 5', album: 'Album 5' },
    { id: 6, name: 'Track 6', artist: 'Artist 6', album: 'Album 6' },
  ]);

  const [playlist, setPlaylist] = useState({
    playlistName: 'New Playlist',
    tracks: [],
  });

  const moveToPlaylist = track => {
    if (playlist.tracks.some(t => t.id === track.id)) {
      console.log('Track already in playlist');
      return;
    }
    setPlaylist({
      ...playlist,
      tracks: [...playlist.tracks, track],
    });
  };

  const removeFromPlaylist = track => {
    setPlaylist({
      ...playlist,
      tracks: playlist.tracks.filter(t => t.id !== track.id),
    });
  };

  return (
    <div className='App'>
      <SearchBar />
      <main>
        <SearchResults
          className='searchResults'
          tracks={searchTracks}
          onSelectTrack={moveToPlaylist}
        />
        <Playlist playlist={playlist} onSelectTrack={removeFromPlaylist} />
      </main>
    </div>
  );
}

export default App;
