import { setUsers, UsersActionTypes } from "../actions";
import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";
import axios from "axios";

const githubApiBaseUrl = "https://api.github.com/users";

const mapToUsers = (response: any): User[] => {
  return response.data.map((user: any): User => ({ username: user.login }));
};

// add catch block
const fetchUsers = (dispatch: Dispatch): void => {
  axios.get(githubApiBaseUrl).then((response) => {
    console.log(response);
    dispatch(setUsers(mapToUsers(response)));
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
