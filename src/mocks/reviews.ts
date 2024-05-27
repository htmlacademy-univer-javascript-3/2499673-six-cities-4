import { ReviewType } from '../types';

export const ReviewsMock: ReviewType[] = [
  {
    id: 0,
    date: 'April 2019',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    comment: 'Quite nice apartments with great views',
    rating: 5,
    isPro: true
  },
  {
    id: 1,
    date: 'December 2021',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    comment: 'Very small room with terrible heating',
    rating: 1,
    isPro: false
  },
  {
    id: 2,
    date: 'May 2022',
    avatar: 'img/avatar-angelina.jpg',
    author: 'Angelina',
    comment: 'Nice apartments with a convenient location',
    rating: 5,
    isPro: true
  },
  {
    id: 3,
    date: 'November 2023',
    avatar: 'img/avatar-max.jpg',
    author: 'Max',
    comment: 'Really very warm apartment with a large bed',
    rating: 5,
    isPro: false
  }
];
