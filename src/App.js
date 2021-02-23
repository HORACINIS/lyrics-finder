import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Lyrics from './components/Lyrics';
import Loading from './components/Loading';

const url = 'https://api.lyrics.ovh/v1/';

function App() {
  const [userInput, setUserInput] = useState({ artist: '', song: '' })
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleSearchAction = (artist, song) => {
    setUserInput({ artist: artist, song: song });
    fetchLyrics(userInput.artist, userInput.song);
    // console.log(artist, song);
  }



  const fetchLyrics = async (artistInput, songInput) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/${artistInput}/${songInput}`);
      const lyrics = await response.json();
      setLyrics(lyrics);
      setLoading(false);
      console.log(lyrics);

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <React.Fragment>

      <main className='container'>
        <Search handleSearchAction={handleSearchAction} />
        {loading ? <Loading /> : <Lyrics lyrics={lyrics} {...userInput} />}
      </main>
    </React.Fragment>
  );
}

export default App;