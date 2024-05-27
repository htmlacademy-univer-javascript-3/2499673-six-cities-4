import { createReducer } from '@reduxjs/toolkit';
import { CitiesMock } from '../mocks/cities';
import { OffersMock } from '../mocks/offers';
import { CityType } from '../types';
import { OfferType } from '../types';
import { changeCity, getOffers } from './action';

type StateType = {
    city: CityType;
    offers: OfferType[];
  }

const initialState: StateType = {
  city: CitiesMock[0],
  offers: OffersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = OffersMock;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
