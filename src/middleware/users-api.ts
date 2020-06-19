import { setUsers, UsersActionTypes } from "../actions";
import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";

const fetchUsers = (dispatch: Dispatch): void => {
  new Promise<{ data: User[] }>((resolve: Function): void =>
    resolve({
      data: [
        { username: "@hdhdhdh" },
        { username: "@manekd" },
        { username: "@somename12" },
        { username: "@rahahhh" },
      ],
    })
  ).then(({ data }: { data: User[] }) => {
    dispatch(setUsers(data));
  });
};

const usersApiMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => (action: Action): void => {
  next(action);
  if (action.type !== UsersActionTypes.GET_USERS) return;
  fetchUsers(dispatch);
};

export default usersApiMiddleware;
