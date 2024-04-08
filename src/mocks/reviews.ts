import { ReviewType } from '../types';

export const reviews: ReviewType[] = [
  {
    id: 1,
    date: 'April 2019',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    description: 'Quite nice apartments with great views',
    rating: 5,
    isPro: true
  },
  {
    id: 2,
    date: 'December 2021',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    description: 'Very small room with terrible heating',
    rating: 1,
    isPro: false
  },
  {
    id: 3,
    date: 'May 2022',
    avatar: 'img/avatar-angelina.jpg',
    author: 'Angelina',
    description: 'Nice apartments with a convenient location',
    rating: 5,
    isPro: true
  },
  {
    id: 4,
    date: 'November 2023',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    description: 'Really very warm apartment with a large bed',
    rating: 5,
    isPro: false
  }
];
