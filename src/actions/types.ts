import { Action } from "redux";

export enum UsersActionTypes {
  SET_USERS = "SET_USERS",
  GET_USERS = "GET_USERS",
  SET_SELECTED_USER = "SET_SELECTED_USER",
}

export interface SetUsersAction extends Action {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

export interface GetUsersAction extends Action {
  type: UsersActionTypes.GET_USERS;
}

export interface SetSelectedUserAction extends Action {
  type: UsersActionTypes.SET_SELECTED_USER;
  payload: User;
}

export type UsersAction =
  | SetUsersAction
  | GetUsersAction
  | SetSelectedUserAction;
