import { Action } from "redux";

export enum UsersActionTypes {
  SET_USERS = "SET_USERS",
  GET_USERS = "GET_USERS",
}

export interface SetUsersAction extends Action {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

export interface GetUsersAction extends Action {
  type: UsersActionTypes.GET_USERS;
}

export type UsersAction = SetUsersAction | GetUsersAction;
