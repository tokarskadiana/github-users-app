import {
  GetUserAction,
  GetUsersAction,
  SetUserAction,
  SetUsersAction,
  UsersActionTypes,
} from "./types";

export function setUsers(users: User[]): SetUsersAction {
  return {
    type: UsersActionTypes.SET_USERS,
    payload: users,
  };
}

export function getUsers(): GetUsersAction {
  return {
    type: UsersActionTypes.GET_USERS,
  };
}

export function setUser(user: User | null): SetUserAction {
  return {
    type: UsersActionTypes.SET_USER,
    payload: user,
  };
}

export function getUser(username: string): GetUserAction {
  return {
    type: UsersActionTypes.GET_USER,
    payload: username,
  };
}
