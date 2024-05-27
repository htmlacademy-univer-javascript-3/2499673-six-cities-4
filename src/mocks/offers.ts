import { OfferType } from '../types';
import { CitiesMock } from './cities';
import { PointsMock } from './points';
import { ReviewsMock } from './reviews';

export const OffersMock: OfferType[] = [
  {
    id: 1,
    img: ['img/apartment-01.jpg'],
    isPremium: true,
    cost: 120,
    name: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    isFavorite: false,
    rating: 4,
    review: [ReviewsMock[0], ReviewsMock[1]],
    city: CitiesMock[0],
    point: PointsMock[0]
  },
  {
    id: 2,
    img: ['img/room.jpg'],
    isPremium: false,
    cost: 80,
    name: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
    rating: 4,
    review: [ReviewsMock[1]],
    city: CitiesMock[0],
    point: PointsMock[1]
  },
  {
    id: 3,
    img: ['img/apartment-02.jpg'],
    isPremium: false,
    cost: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: false,
    rating: 4.7,
    review: [ReviewsMock[2]],
    city: CitiesMock[0],
    point: PointsMock[2]
  },
  {
    id: 4,
    img: ['img/apartment-03.jpg'],
    isPremium: true,
    cost: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: true,
    rating: 5,
    review: [ReviewsMock[3]],
    city: CitiesMock[3],
    point: PointsMock[3]
  },
];
