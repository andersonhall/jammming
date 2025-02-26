import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <div className='searchResults'>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
