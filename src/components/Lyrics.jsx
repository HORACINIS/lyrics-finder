import React, { useState } from 'react';

const Lyrics = ({ lyrics, artist, song }) => {

    const [showMore, setShowMore] = useState(false);
    return (
        <section className='text-center'>
            {artist && <div>
                <h2>{`${song.toUpperCase()} by ${artist.toUpperCase()}`}</h2>
                <pre>{!showMore ? `${lyrics.lyrics.substring(0, 200)}...` : lyrics.lyrics}</pre>
                <button onClick={() => setShowMore(!showMore)} className='btn btn-outline-dark' type='button'>
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            </div>
            }
        </section>
    )
}

export default Lyrics;
