import { createReducer } from '@reduxjs/toolkit';
import { CitiesMock } from '../mocks/cities';
import { OffersMock } from '../mocks/offers';
import { CityType } from '../types';
import { OfferType } from '../types';
import { PointType } from '../types';
import { changeCity, changeHighlightedMarker, changeSortOptions, getOffers } from './action';
import { filters } from '../utils';


type StateType = {
    city: CityType;
    offers: OfferType[];
    sortType: string;
    highlightedMarker?: PointType;
  }

const initialState: StateType = {
  city: CitiesMock[0],
  offers: OffersMock,
  sortType: filters.POPULAR,
  highlightedMarker: undefined
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = OffersMock;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortOptions, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeHighlightedMarker, (state, action) => {
      state.highlightedMarker = action.payload;
    });
});
