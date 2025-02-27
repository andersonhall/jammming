import './App.css';
import './SearchResults/SearchResults.module.css';
import './Playlist/Playlist.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import { useState, useEffect, use } from 'react';
import Spotify from './Modules/Spotify';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (accessToken) {
      return;
    } else {
      Spotify.getAccessToken().then(token => {
        setAccessToken(token);
      });
    }
  }, []);

  const [searchTracks, setSearchTracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri: 'uri2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3', uri: 'uri3' },
    { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4', uri: 'uri4' },
    { id: 5, name: 'Track 5', artist: 'Artist 5', album: 'Album 5', uri: 'uri5' },
    { id: 6, name: 'Track 6', artist: 'Artist 6', album: 'Album 6', uri: 'uri6' },
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

  const changePlaylistName = name => {
    setPlaylist({
      ...playlist,
      playlistName: name,
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
        <Playlist
          playlist={playlist}
          onSelectTrack={removeFromPlaylist}
          onNameChange={changePlaylistName}
        />
      </main>
    </div>
  );
}

export default App;
