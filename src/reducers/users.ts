import { UsersAction, UsersActionTypes } from '../actions';

const initialState: UsersState = {
  isLoading: false,
  usersList: [],
};

const users = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
    case UsersActionTypes.GET_USER:
      return {
        ...state,
        isLoading: true,
      };

    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        isLoading: false,
        usersList: [...state.usersList, ...action.payload],
      };

    case UsersActionTypes.SET_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default users;
