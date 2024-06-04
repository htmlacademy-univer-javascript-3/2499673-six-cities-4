import { NameSpace } from '../../config';
import { ExtendedOffer, Offer } from '../../types';
import { Review } from '../../types';
import { State } from '../../types';

export const getChosenOffer = (state: State): ExtendedOffer | undefined => state[NameSpace.Offer].chosenOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Offer].reviews;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offer].nearbyOffers;
export const getIsChosenOfferDataLoading = (state: State): boolean => state[NameSpace.Offer].isChosenOfferDataLoading;
export const getIsCommentPosting = (state: State): boolean => state[NameSpace.Offer].isCommentPosting;
export const getIsCommentRejected = (state: State): boolean => state[NameSpace.Offer].isCommentRejected;
