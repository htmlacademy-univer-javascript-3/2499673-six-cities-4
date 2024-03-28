import Main from '../pages/Main.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound.tsx';
import Offer from '../pages/Offer.tsx';
import Login from '../pages/Login.tsx';
import Favorites from '../pages/Favorites.tsx';
import PrivateRoute from './private-route.tsx';
import { OfferType } from '../types.tsx'

export type AppPropts = {
  displayedPlaces: number;
  offers: OfferType[];
}

export default function App({ displayedPlaces, offers }: AppPropts): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main displayedPlaces={displayedPlaces} offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute>
          <Favorites favoritesList={offers.filter((obj) => obj.isBookmarked)} /></PrivateRoute>} />
        <Route path="offer/:id" element={<Offer />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}