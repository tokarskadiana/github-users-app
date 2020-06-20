import { setUser } from "../../actions";
import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL, mapToUser } from "./users-api.helper";

const fetchUser = (dispatch: Dispatch, username: string): void => {
  axios
    .get(`${BASE_URL}/${username}`)
    .then((response) => {
      dispatch(setUser(mapToUser(response.data)));
    })
    .catch(() => dispatch(setUser(null)));
};

export default fetchUser;
