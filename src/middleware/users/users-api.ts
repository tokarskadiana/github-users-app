import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { UsersActionTypes } from '../../actions';

import fetchUser from './fetch-user';
import fetchUsers from './fetch-users';

const API_ACTIONS = [UsersActionTypes.GET_USERS, UsersActionTypes.GET_USER];

const usersApiMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch,
) => (action: AnyAction): void => {
  next(action);
  if (!API_ACTIONS.includes(action.type)) {
    return;
  }

  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      fetchUsers(dispatch);
      break;
    case UsersActionTypes.GET_USER:
      fetchUser(dispatch, action.payload);
      break;
  }
};

export default usersApiMiddleware;
