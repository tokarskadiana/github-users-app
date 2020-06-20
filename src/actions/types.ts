import { Action } from "redux";

export enum UsersActionTypes {
  SET_USERS = "SET_USERS",
  GET_USERS = "GET_USERS",
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
}

export interface SetUsersAction extends Action {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

export interface GetUsersAction extends Action {
  type: UsersActionTypes.GET_USERS;
}

export interface GetUserAction extends Action {
  type: UsersActionTypes.GET_USER;
  payload: string;
}

export interface SetUserAction extends Action {
  type: UsersActionTypes.SET_USER;
  payload: User | null;
}

export type UsersAction =
  | SetUsersAction
  | GetUsersAction
  | GetUserAction
  | SetUserAction;
