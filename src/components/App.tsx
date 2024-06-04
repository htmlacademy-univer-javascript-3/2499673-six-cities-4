import MainScreen from '../pages/main-screen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/login-screen';
import FavoritesScreen from '../pages/favorites-screen';
import NotFoundScreen from '../pages/page-not-found';
import OfferScreen from '../pages/offer-screen';
import PrivateRoute from './private-route';
import { AppRoute, AuthorizationStatus } from '../config';
import { useAppSelector } from '../hooks/index.ts';
import LoadingScreen from '../pages/loading-screen.tsx';
import HistoryRouter from './history-route';
import browserHistory from '../browser-history.ts';
import MainRouteRedirection from './main-route-redirection.tsx';
import { getAuthorizationStatus } from '../store/user-process/selectors.ts';
import { getIsOffersDataLoading } from '../store/offers-data/selectors.ts';


export default function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown || isFavoriteOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <MainRouteRedirection >
              <LoginScreen />
            </MainRouteRedirection>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
      </Routes>
    </HistoryRouter>
  );
}
