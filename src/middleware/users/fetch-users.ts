import axios from 'axios';
import { Dispatch } from 'redux';

import { setUsers } from '../../actions';

import { BASE_URL, mapToUser } from './users-api.helper';

let params = {
  per_page: 20,
  since: 0,
};

const mapToUsers = (response: any): User[] => {
  return response.data.map(mapToUser);
};

const fetchUsers = (dispatch: Dispatch): void => {
  axios
    .get(BASE_URL, {
      params,
    })
    .then(response => {
      params = { ...params, since: response.data[response.data.length - 1].id };
      dispatch(setUsers(mapToUsers(response)));
    })
    .catch(() => dispatch(setUsers([])));
};

export default fetchUsers;
