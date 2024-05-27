import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction, postReviewAction } from '../api-actions';
import { OfferData } from '../../types/state';


const initialState: OfferData = {
  chosenOffer: undefined,
  reviews: [],
  nearbyOffers: [],
  isChosenOfferDataLoading: false
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isChosenOfferDataLoading = false;
        state.chosenOffer = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isChosenOfferDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isChosenOfferDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isChosenOfferDataLoading = false;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.isChosenOfferDataLoading = false;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isChosenOfferDataLoading = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
}
);