import { OfferType } from './types';

export enum typeOfCardList {
    favourites = 'favorites__places',
    nearest = 'near-places__list places__list',
    standart = 'cities__places-list places__list tabs__content',
  }

export const listToCard = new Map(
  [
    [typeOfCardList.favourites, 'favorites__card place-card'],
    [typeOfCardList.nearest, 'near-places__card place-card'],
    [typeOfCardList.standart, 'cities__card place-card']
  ]
);

export const filters = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

const sortFunctions = {
  [filters.LOW_TO_HIGH]: (offers: OfferType[]) => offers.sort((offerA, offerB) => offerA.cost - offerB.cost),
  [filters.HIGH_TO_LOW]: (offers: OfferType[]) => offers.sort((offerA, offerB) => offerB.cost - offerA.cost),
  [filters.TOP_RATED]: (offers: OfferType[]) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating)
};

export const getSortedOffers = (
  offers: OfferType[],
  sortType: string
) => {
  if (sortFunctions[sortType]) {
    return sortFunctions[sortType](offers);
  } else if (sortType === filters.POPULAR) {
    return offers;
  }
};
