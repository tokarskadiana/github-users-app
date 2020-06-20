import { setUsers, UsersActionTypes } from "../actions";
import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import axios from "axios";

const githubApiBaseUrl = "https://api.github.com/users";
const per_page = 20;
let since = 0;

const mapToUsers = (response: any): User[] => {
  return response.data.map(
    (user: any): User => ({
      username: user.login,
      avatarUrl: user.avatar_url,
      githubUrl: user.html_url,
    })
  );
};

const fetchUsers = (dispatch: Dispatch): void => {
  axios
    .get(githubApiBaseUrl, {
      params: { per_page, since },
    })
    .then((response) => {
      since = response.data[response.data.length - 1].id;
      dispatch(setUsers(mapToUsers(response)));
    })
    .catch(() => dispatch(setUsers([])));
};

const usersApiMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => (action: AnyAction): void => {
  next(action);
  if (action.type !== UsersActionTypes.GET_USERS) return;
  fetchUsers(dispatch);
};

export default usersApiMiddleware;
