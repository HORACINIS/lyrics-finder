import React from 'react';

const lyrics = ({ lyrics, artist, song }) => {

    return (
        <section className='text-center'>
            {artist && <h2>{`${song.toUpperCase()} by ${artist.toUpperCase()}`}</h2>}
            {lyrics && <pre>{lyrics.lyrics.substring(0, 200)}</pre>}
        </section>
    )
}

export default lyrics;
