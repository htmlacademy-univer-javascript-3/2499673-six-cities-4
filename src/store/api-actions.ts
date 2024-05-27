import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadOffers, loadUserData, redirectToRoute, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { changeChosenOffer, changeNearbyOffers, loadOffers, loadReviews, loadUserData, redirectToRoute, requireAuthorization, setChosenOfferDataLoadingStatus, setError, setOffersDataLoadingStatus } from './action';
import { ExtendedOffer, Offer } from '../types/offer';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const clearErrorAction = createAsyncThunk(
  'CLEAR_ERROR_ACTION',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_OFFERS_ACTION',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'CHECK_AUTH_ACTION',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'LOGIN_ACTION',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'LOGOUT_ACTION',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_OFFER_ACTION',
  async (id, { dispatch, extra: api }) => {
    dispatch(setChosenOfferDataLoadingStatus(true));
    const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(changeChosenOffer(data));
    dispatch(setChosenOfferDataLoadingStatus(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_REVIEWS_ACTION',
  async (id, { dispatch, extra: api }) => {
    dispatch(setChosenOfferDataLoadingStatus(true));
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
    dispatch(setChosenOfferDataLoadingStatus(false));
  },
);

export const fetchNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_NEARBY_ACTION',
  async (id, { dispatch, extra: api }) => {
    dispatch(setChosenOfferDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    dispatch(changeNearbyOffers(data));
    dispatch(setChosenOfferDataLoadingStatus(false));
  },
);

export const postReviewAction = createAsyncThunk<void, {
  id: string;
  comment: string;
  rating: number;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'POST_REVIEW_ACTION',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
    const { data: reviews } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(reviews));
  },
);
