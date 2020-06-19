import { UsersAction, UsersActionTypes } from "../actions";

const initialState: UsersState = {
  usersList: [],
};

const users = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.SET_USERS:
      return { usersList: action.payload };
    default:
      return state;
  }
};

export default users;
