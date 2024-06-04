import { NameSpace } from '../../config';
import { Offer } from '../../types';
import { State } from '../../types';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
