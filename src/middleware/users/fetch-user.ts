import axios from 'axios';
import { Dispatch } from 'redux';

import { setUser } from '../../actions';

import { BASE_URL, mapToUser } from './users-api.helper';

const fetchUser = (dispatch: Dispatch, username: string): void => {
  axios
    .get(`${BASE_URL}/${username}`)
    .then(response => {
      dispatch(setUser(mapToUser(response.data)));
    })
    .catch(() => dispatch(setUser()));
};

export default fetchUser;
