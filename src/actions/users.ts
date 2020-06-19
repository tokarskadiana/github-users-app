import { GetUsersAction, SetUsersAction, UsersActionTypes } from "./types";

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
