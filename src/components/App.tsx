import Main from '../pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Offer from '../pages/Offer';
import Login from '../pages/Login';
import Favorites from '../pages/Favorites';
import PrivateRoute from './private-route';
import { OfferType } from '../types';
import { ReviewType } from '../types';

export type AppPropts = {
  displayedPlaces: number;
  offers: OfferType[];
  reviews: ReviewType[];
}

export default function App({ displayedPlaces, offers, reviews }: AppPropts): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main displayedPlaces={displayedPlaces} offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute>
          <Favorites favoritesList={offers.filter((obj) => obj.isBookmarked)} />
        </PrivateRoute>} />
        <Route path="offer/:id" element={<Offer reviews={reviews} />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}