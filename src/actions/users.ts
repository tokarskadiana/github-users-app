import {
  GetUserAction,
  GetUsersAction,
  SetUserAction,
  SetUsersAction,
  UsersActionTypes,
} from './types';

export const setUsers = (users: User[]): SetUsersAction => {
  return {
    payload: users,
    type: UsersActionTypes.SET_USERS,
  };
};

export const getUsers = (): GetUsersAction => {
  return {
    type: UsersActionTypes.GET_USERS,
  };
};

export const setUser = (user?: User): SetUserAction => {
  return {
    payload: user,
    type: UsersActionTypes.SET_USER,
  };
};

export const getUser = (username: string): GetUserAction => {
  return {
    payload: username,
    type: UsersActionTypes.GET_USER,
  };
};
