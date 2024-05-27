import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Point } from './location';
import { ExtendedOffer, Offer } from './offer';
import { Review } from './review';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReviewType = {
  id: number;
  author: string;
  avatar: string;
  isPro: boolean;
  rating: number;
  date: string;
  comment: string;
};

export type PointType = {
  lat: number;
  lng: number;
};

export type OfferType = {
  id: number;
  name: string;
  img: string[];
  cost: number;
  type: 'Apartment' | 'Room';
  rating: number;
  review: ReviewType[];
  isPremium: boolean;
  isFavorite: boolean;
  city: CityType;
  point: PointType;
};

export type CityType = {
    title: string;
} & PointType;

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

export type OfferData = {
    chosenOffer?: ExtendedOffer;
    reviews: Review[];
    nearbyOffers: Offer[];
    isChosenOfferDataLoading: boolean;
  };

export type OffersData = {
    offers: Offer[];
    isOffersDataLoading: boolean;
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