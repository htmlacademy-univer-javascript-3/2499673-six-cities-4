export type ReviewType = {
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

export type OfferType = {
  id: number;
  name: string;
  description: string;
  img: string;
  valuePerNight: number;
  type: 'Apartment' | 'Room';
  isBookmarked: boolean;
  rating: number;
  review: ReviewType[];
  isPremium: boolean;
  isFavorite: boolean;
  city: string;
};
