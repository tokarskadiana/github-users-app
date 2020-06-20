import {
  GetUserAction,
  GetUsersAction,
  SetUserAction,
  SetUsersAction,
  UsersActionTypes,
} from "./types";

export const setUsers = (users: User[]): SetUsersAction => {
  return {
    type: UsersActionTypes.SET_USERS,
    payload: users,
  };
};

export const getUsers = (): GetUsersAction => {
  return {
    type: UsersActionTypes.GET_USERS,
  };
};

export const setUser = (user: User | null): SetUserAction => {
  return {
    type: UsersActionTypes.SET_USER,
    payload: user,
  };
};

export const getUser = (username: string): GetUserAction => {
  return {
    type: UsersActionTypes.GET_USER,
    payload: username,
  };
};
