import { Action } from 'redux';

export enum UsersActionTypes {
  SET_USERS = 'SET_USERS',
  GET_USERS = 'GET_USERS',
  SET_USER = 'SET_USER',
  GET_USER = 'GET_USER',
}

export interface SetUsersAction extends Action {
  payload: User[];
  type: UsersActionTypes.SET_USERS;
}

export interface GetUsersAction extends Action {
  type: UsersActionTypes.GET_USERS;
}

export interface GetUserAction extends Action {
  payload: string;
  type: UsersActionTypes.GET_USER;
}

export interface SetUserAction extends Action {
  payload?: User;
  type: UsersActionTypes.SET_USER;
}

export type UsersAction =
  | SetUsersAction
  | GetUsersAction
  | GetUserAction
  | SetUserAction;
