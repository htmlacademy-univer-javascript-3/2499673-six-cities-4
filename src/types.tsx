import { AuthorizationStatus } from './config';
import { store } from './store/index';

export type AuthData = {
  email: string;
  password: string;
};

export type FavoriteData = {
  id: string;
  status: number;
};

export type Point = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Point;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Point;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ExtendedOffer = Pick<Offer, 'id' | 'title' | 'type' | 'price' | 'city' | 'location' | 'isFavorite' | 'isPremium' | 'rating'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
  images: string[];
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type UserData = {
  name: string;
  email: string;
  token: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferData = {
  chosenOffer?: ExtendedOffer;
  reviews: Review[];
  nearbyOffers: Offer[];
  isChosenOfferDataLoading: boolean;
  isCommentPosting: boolean;
  isCommentRejected: boolean;
};

export type OffersData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  hasError: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
};

export type CommonData = {
  sortType: string;
  city: string;
  highlightedMarker: Point | undefined;
  error: string | null;
}

export type FavoriteProcess = {
  favoriteOffers: Offer[];
  isFavoriteOffersDataLoading: boolean;
  favoritesNumber: number;
  favoriteOffersId: string[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
