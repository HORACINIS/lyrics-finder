import React from 'react';
import noConnection from '../images/noConnection.png';

const NoConnection = () => {
  return (
    <div style={{ marginTop: '20%' }} className='text-center'>
      <h1>No internet connection!</h1>
      <img src={noConnection} alt='no internet' />
    </div>
  )
}

export default NoConnection;