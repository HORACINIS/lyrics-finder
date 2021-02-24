import React, { useState } from 'react';
import Search from './components/Search';
import Lyrics from './components/Lyrics';
import Loading from './components/Loading';

const url = 'https://api.lyrics.ovh/v1/';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({})

  const handleSearchAction = (givenArtist, givenSong) => {
    setUserInput({ artist: givenArtist, song: givenSong });
    fetchLyrics(givenArtist, givenSong);
  }



  const fetchLyrics = async (artistInput, songInput) => {
    setLoading(true);
    try {

      const response = await fetch(`${url}/${artistInput}/${songInput}`, { mode: 'no-cors' });
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