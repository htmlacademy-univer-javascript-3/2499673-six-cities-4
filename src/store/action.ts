import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types';

export const getOffers = createAction('OFFERS_GET');

export const changeCity = createAction('CITY_CHANGE', (value: CityType) => ({
  payload: value
}));
