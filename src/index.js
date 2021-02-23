import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TopBar from './components/TopBar';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
