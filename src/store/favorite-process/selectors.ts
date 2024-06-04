import { NameSpace } from '../../config';
import { Offer } from '../../types';
import { State } from '../../types';

export const getFavoritesNumber = (state: State): number => state[NameSpace.Favorite].favoritesNumber;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Favorite].favoriteOffers;
export const getIsFavoriteOffersDataLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoriteOffersDataLoading;
export const getFavoriteOffersId = (state: State): string[] => state[NameSpace.Favorite].favoriteOffersId;
