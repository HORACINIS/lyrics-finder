import React, { useState } from 'react';
import Search from './components/Search';
import Lyrics from './components/Lyrics';
import Loading from './components/Loading';

const url = 'https://api.lyrics.ovh/v1/';
const cors = 'https://still-beach-56265.herokuapp.com/';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({});
  const [errorFound, setErrorFound] = useState(false);
  // const [logoColour, setLogoColour] = useState()

  const handleSearchAction = (givenArtist, givenSong) => {
    if (givenSong === '' || givenSong === '') {
      alert('Enter both an artist and a song!');
      setLoading(false);
    } else {
      setUserInput({ artist: givenArtist, song: givenSong });
      fetchLyrics(givenArtist, givenSong);
    }
  }

  const fetchLyrics = async (artistInput, songInput, options) => {
    setLoading(true);
    console.log(options)
    try {

      const response = await fetch(`${cors}${url}/${artistInput}/${songInput}`);
      console.log(response.status);
      console.log(response)
      console.log(response.ok)

      const lyrics = await response.json();
      setLyrics(lyrics);
      setLoading(false);
      setErrorFound(false);
      console.log(lyrics);

    } catch (error) {
      console.log(error)
      setLoading(false);
      setErrorFound(true);
    }
  }



  return (
    <React.Fragment>

      <main className='container'>
        <Search handleSearchAction={handleSearchAction} />
        {loading ? <Loading /> : <Lyrics lyrics={lyrics} {...userInput} errorFound={errorFound} />}
      </main>
    </React.Fragment>
  );
}

export default App;