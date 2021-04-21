import React from 'react';
import error from '../images/notFound.png'

const ErrorFound = () => {
  return (
    <div style={{ marginTop: '20%' }} className='text-center'>
      <h1>No lyrics found!</h1>
      <img src={error} alt='error' />
    </div>
  )
}

export default ErrorFound;
