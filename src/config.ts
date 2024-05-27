import { CityType } from './types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const URL_MARKER_STANDART =
  '/img/pin.svg';

  export enum APIRoute {
    Offers = '/offers',
  }
  
  export const CITIES: CityType[] = [
    {
      name: 'Paris',
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 11,
      },
    },
    {
      name: 'Brussels',
      location: {
        latitude: 50.85034,
        longitude: 4.35171,
        zoom: 11,
      },
    },
    {
      name: 'Cologne',
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 11,
      },
    },
    {
      name: 'Amsterdam',
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 11,
      },
    },
    {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 11,
      },
    },
    {
      name: 'Dusseldorf',
      location: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 11,
      },
    },
  ];
  
  export const TIMEOUT_SHOW_ERROR = 2000;