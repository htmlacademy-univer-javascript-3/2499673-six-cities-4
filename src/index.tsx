import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { DisplayedPlaces } from './config';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App displayedPlaces={DisplayedPlaces.displayedPlaces} offers={offers} reviews={reviews} />
  </React.StrictMode>
);
