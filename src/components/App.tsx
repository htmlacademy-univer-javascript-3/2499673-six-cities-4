import MainScreen from '../pages/Main.tsx';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/Login.tsx';
import FavoritesScreen from '../pages/Favorites.tsx';
import NotFoundScreen from '../pages/PageNotFound.tsx';
import OfferScreen from '../pages/Offer.tsx';
import PrivateRoute from './private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../config.ts';
import { useAppSelector } from '../../hooks/index.ts';
import LoadingScreen from '../../pages/loading-screen/loading-screen.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';


export default function App(): JSX.Element {
  
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }
  
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
