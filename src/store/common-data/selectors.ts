import { NameSpace } from '../../config';
import { Point } from '../../types';
import { State } from '../../types';

export const getSortType = (state: State): string => state[NameSpace.Common].sortType;
export const getCity = (state: State): string => state[NameSpace.Common].city;
export const getHighlightedMarker = (state: State): Point | undefined => state[NameSpace.Common].highlightedMarker;
export const getError = (state: State): string | null => state[NameSpace.Common].error;