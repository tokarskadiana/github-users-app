import { setUsers, UsersActionTypes } from "../actions";
import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import axios from "axios";

const githubApiBaseUrl = "https://api.github.com/users";
let getUsersUrl = githubApiBaseUrl;

const mapToUsers = (response: any): User[] => {
  return response.data.map((user: any): User => ({ username: user.login }));
};

// add catch block
const fetchUsers = (dispatch: Dispatch): void => {
  axios.get(getUsersUrl).then((response) => {
    getUsersUrl = `${githubApiBaseUrl}?since=${
      response.data[response.data.length - 1].id
    }`;
    dispatch(setUsers(mapToUsers(response)));
  });
};

const usersApiMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => (action: AnyAction): void => {
  next(action);
  if (action.type !== UsersActionTypes.GET_USERS) return;
  fetchUsers(dispatch);
};

export default usersApiMiddleware;
