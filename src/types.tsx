type Review = {
  id: number;
  author: string;
  avatar: string;
  isPro: boolean;
  rating: number;
  date: string;
  description: string;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

type Coordinates = [number, number];

export type OfferType = {
  id: number;
  coordinates: Coordinates;
  name: string;
  description: string;
  img: string;
  valuePerNight: number;
  type: 'Apartment' | 'Room';
  isBookmarked: boolean;
  rating: number;
  review: Review;
  isPremium: boolean;
  isFavorite: boolean;
  city: string;
};