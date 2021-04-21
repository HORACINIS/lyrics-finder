import React, { useState } from 'react';
import Search from './components/Search';
import Lyrics from './components/Lyrics';
import Loading from './components/Loading';
import TopBar from './components/TopBar';

import soundWave from './images/soundWave.png';
import soundWaveGreen from './images/soundWaveGreen.png';
import soundWaveRed from './images/soundWaveRed.png';

const url = 'https://api.lyrics.ovh/v1/';
const cors = 'https://still-beach-56265.herokuapp.com/';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({});
  const [errorFound, setErrorFound] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const [logoColour, setLogoColour] = useState(soundWave);

  const handleSearchAction = (givenArtist, givenSong) => {
    setLogoColour(soundWave);
    if (givenArtist.replace(/\s/g, "") === "" || givenSong.replace(/\s/g, "") === "") {
      alert('Enter both an artist and a song!');
      setLoading(false);
    } else {
      setUserInput({ artist: givenArtist, song: givenSong });
      fetchLyrics(givenArtist, givenSong);
    }
  }

  const fetchLyrics = async (artistInput, songInput) => {
    setLoading(true);
    setErrorFound(false);
    setNoConnection(false);
    try {
      const response = await fetch(`${cors}${url}/${artistInput}/${songInput}`);
      // console.log(response.status)
      // console.log(response)
      if (response.status === 200) {
        const lyrics = await response.json();
        setLyrics(lyrics);
        setLoading(false);
        setLogoColour(soundWaveGreen);
        console.log(lyrics);
      } else if (response.status === 404) {
        setLoading(false);
        setLogoColour(soundWaveRed);
        setErrorFound(true);
      }
    } catch (e) {
      // console.log(e.message)
      setLoading(false);
      setNoConnection(true);
      setLogoColour(soundWaveRed);
    }
  }

  return (
    <React.Fragment>
      <TopBar logoColour={logoColour} />
      <main className='container'>
        <Search handleSearchAction={handleSearchAction} />
        {loading ? <Loading /> : <Lyrics lyrics={lyrics} {...userInput} errorFound={errorFound} noConnection={noConnection} />}
      </main>
    </React.Fragment>
  );
}

export default App;