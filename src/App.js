import './App.css';
import './SearchResults/SearchResults.module.css';
import './Playlist/Playlist.module.css';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Spotify from './Modules/Spotify';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await Spotify.getAccessToken();
      setAccessToken([token[0], token[1]]);
      setLoading(false);
      const timeout = setTimeout(() => {
        setAccessToken(null);
        fetchAccessToken();
      }, token[1] - Date.now());
      return () => clearTimeout(timeout);
    };
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      const fetchUser = async () => {
        const user = await Spotify.getUser(accessToken[0]);
        setUser(user);
      };
      fetchUser();
    }
    return;
  }, [accessToken]);

  const [searchTracks, setSearchTracks] = useState([
    // { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
    // { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri: 'uri2' },
    // { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3', uri: 'uri3' },
    // { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4', uri: 'uri4' },
    // { id: 5, name: 'Track 5', artist: 'Artist 5', album: 'Album 5', uri: 'uri5' },
    // { id: 6, name: 'Track 6', artist: 'Artist 6', album: 'Album 6', uri: 'uri6' },
  ]);

  const [playlist, setPlaylist] = useState({
    playlistName: '',
    tracks: [],
  });

  const moveToPlaylist = track => {
    if (playlist.tracks.some(t => t.id === track.id)) {
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

  const getSearchResults = async searchText => {
    const response = await fetch('https://api.spotify.com/v1/search?type=track&q=' + searchText, {
      headers: {
        Authorization: 'Bearer ' + accessToken[0],
      },
    });
    const data = await response.json();
    setSearchTracks(
      data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }))
    );
  };

  const savePlaylist = async playlistIds => {
    const createPlaylist = await fetch(
      'https://api.spotify.com/v1/users/' + user.id + '/playlists',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken[0],
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          name: playlist.playlistName,
          public: false,
        }),
      }
    );
    const response = await createPlaylist.json();
    console.log(response);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='App'>
      <SearchBar onSearch={getSearchResults} />
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
          onSavePlaylist={savePlaylist}
        />
      </main>
    </div>
  );
}

export default App;
