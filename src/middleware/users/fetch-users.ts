import { Dispatch } from "redux";
import axios from "axios";
import { setUsers } from "../../actions";
import { BASE_URL, mapToUser } from "./users-api.helper";

const per_page = 20;
let since = 0;

const mapToUsers = (response: any): User[] => {
  return response.data.map(mapToUser);
};

const fetchUsers = (dispatch: Dispatch): void => {
  axios
    .get(BASE_URL, {
      params: { per_page, since },
    })
    .then((response) => {
      since = response.data[response.data.length - 1].id;
      dispatch(setUsers(mapToUsers(response)));
    })
    .catch(() => dispatch(setUsers([])));
};

export default fetchUsers;
