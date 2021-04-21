import React, { useState } from 'react';
import ErrorFound from './ErrorFound';
import NoConnection from './NoConnection';

const Lyrics = ({ lyrics, artist, song, errorFound, noConnection }) => {

  const [showMore, setShowMore] = useState(false);
  if (errorFound) {
    return (
      <ErrorFound />
    )
  }
  if (noConnection) {
    return (
      <NoConnection />
    )
  }
  return (
    <section className='text-center' style={{ marginTop: '20px' }}>
      {lyrics && <div>
        <h2>{`${song.toUpperCase()} by ${artist.toUpperCase()}`}</h2>
        <pre style={{ fontSize: '1em', marginTop: '20px' }} >{!showMore ? `${lyrics.lyrics.substring(0, 200)}...` : lyrics.lyrics}</pre>
        <button style={{ marginBottom: '30px' }} onClick={() => setShowMore(!showMore)} className='btn btn-outline-dark' type='button'>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
      }
    </section>
  )
}

export default Lyrics;
