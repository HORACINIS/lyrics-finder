import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import TopBar from './components/TopBar';
import Lyrics from './components/Lyrics';

const url = 'https://api.lyrics.ovh/v1/';

function App() {
  const [userInput, setUserInput] = useState({ artist: '', song: '' })
  const [lyrics, setLyrics] = useState('');

  const handleSearchAction = (artist, song) => {
    setUserInput({ artist: artist, song: song });
    fetchLyrics(userInput.artist, userInput.song);
    // console.log(artist, song);
  }



  const fetchLyrics = async (artistInput, songInput) => {
    const response = await fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`);
    const lyrics = await response.json();
    setLyrics(lyrics);
    console.log(lyrics);
  }

  return (
    <React.Fragment>
      <header>
        <TopBar />
      </header>

      <main className='container'>
        <Search handleSearchAction={handleSearchAction} />
        <Lyrics lyrics={lyrics}/>
      </main>
    </React.Fragment>
  );
}

export default App;