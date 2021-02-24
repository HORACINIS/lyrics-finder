import React, { useState } from 'react';
import ErrorFound from './ErrorFound';

const Lyrics = ({ lyrics, artist, song, errorFound }) => {

    const [showMore, setShowMore] = useState(false);
    if (errorFound) {
        return (
            <ErrorFound />
        )
    }
    return (
        <section className='text-center'>
            {lyrics && <div>
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
