import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types';
import { PointType } from '../types';

export const getOffers = createAction('OFFERS_GET');

export const changeCity = createAction('CITY_CHANGE', (value: CityType) => ({
  payload: value
}));

export const changeSortOptions = createAction('CHANGE_SORT_OPTIONS', (value: string) => ({
  payload: value
}));

export const changeHighlightedMarker = createAction('CHANGE_HIGHLIGHTED_MARKER', (value: PointType | undefined) => ({
  payload: value
}));
