import { AuthorizationStatus, NameSpace } from '../../config';
import { State } from '../../types';
import { UserData } from '../../types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserData | undefined => state[NameSpace.User].userData;
