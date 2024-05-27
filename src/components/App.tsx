import MainScreen from '../pages/Main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/Login.tsx';
import FavoritesScreen from '../pages/Favorites.tsx';
import NotFoundScreen from '../pages/PageNotFound.tsx';
import OfferScreen from '../pages/Offer.tsx';
import PrivateRoute from './private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../config.ts';
import { OfferType } from '../types';
import { OffersMock } from '../mocks/offers.ts';

export default function App(): JSX.Element {
  const favourites: OfferType[] = OffersMock.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundScreen/>} />
        <Route path={AppRoute.Main} element={<MainScreen/>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoritesScreen offers={favourites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Offer} element={<OfferScreen offer={OffersMock[0]}/>} />
      </Routes>
    </BrowserRouter>
  );
}
