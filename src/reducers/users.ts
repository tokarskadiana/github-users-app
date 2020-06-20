import { UsersAction, UsersActionTypes } from "../actions";

const initialState: UsersState = {
  usersList: [],
  selectedUser: null,
  isLoading: false,
};

const users = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        usersList: [...state.usersList, ...action.payload],
        isLoading: false,
      };

    case UsersActionTypes.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default users;
