import {
  GetUsersAction,
  SetSelectedUserAction,
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

export function setSelectedUser(user: User): SetSelectedUserAction {
  return {
    type: UsersActionTypes.SET_SELECTED_USER,
    payload: user,
  };
}
