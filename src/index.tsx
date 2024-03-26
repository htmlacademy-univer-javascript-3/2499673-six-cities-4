import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Config from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App displayedPlaces={Config.displayedPlaces}/>
  </React.StrictMode>
);
