import { OfferType } from '../types';
import { reviews } from './reviews';

export const offers: OfferType[] = [
  {
    id: 0,
    name: 'Beautiful &amp; luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    valuePerNight: 120,
    type: 'Apartment',
    rating: 4.4,
    isBookmarked: true,
    isFavorite: true,
    review: [reviews[0]],
    isPremium: true,
    city: 'Amsterdam',
    img: 'img/apartment-01.jpg'
  },
  {
    id: 1,
    name: 'Wood and stone place',
    description: 'Good room at the centre of city',
    valuePerNight: 100,
    type: 'Room',
    rating: 5,
    isBookmarked: false,
    isFavorite: true,
    review: [reviews[1]],
    isPremium: true,
    city: 'Amsterdam',
    img: 'img/apartment-02.jpg'
  },
  {
    id: 2,
    name: 'Apartment',
    description: 'Nice, cozy, warm big bed apartment',
    valuePerNight: 180,
    type: 'Apartment',
    rating: 5,
    isBookmarked: true,
    isFavorite: true,
    review: [reviews[2]],
    isPremium: false,
    city: 'Amsterdam',
    img: 'img/apartment-03.jpg'
  },
  {
    id: 3,
    name: 'Room',
    description: 'A budget option with excellent views',
    valuePerNight: 52,
    type: 'Room',
    rating: 3.1,
    isBookmarked: false,
    isFavorite: false,
    review: [reviews[3]],
    isPremium: true,
    city: 'Amsterdam',
    img: 'img/room.jpg'
  },
];