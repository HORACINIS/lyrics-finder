import React from 'react';

const Search = ({ handleSearchAction }) => {
  const styles = {
    h1: { margin: '20px 0px 20px 0px' }
  }
  return (
    <div className='text-center'>
      <h1 style={styles.h1}>Search your lyrics</h1>

      <form className="d-flex">
        <input id='songInput' className="form-control me-2" type="search" placeholder="Song" aria-label="Search"></input>
        <input id='artistInput' className="form-control me-2" type="search" placeholder="Artist" aria-label="Search"></input>

        <button onClick={(e) => {
          e.preventDefault()
          const artistInput = document.querySelector('#artistInput').value;
          const songInput = document.querySelector('#songInput').value;
          handleSearchAction(artistInput, songInput);
        }} className="btn btn-dark" type="submit">Search!</button>
      </form>
    </div>
  )
}

export default Search;
