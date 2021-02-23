import React from 'react';
// import Lyrics from './components/Lyrics'

const lyrics = ({ lyrics }) => {
    console.log(lyrics)
    return (
        <div>
            <h1>Lyrics</h1>
            {lyrics && <pre>{lyrics.lyrics}</pre>}
        </div>
    )
}

export default lyrics;
