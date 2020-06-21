import { UsersActionTypes } from '../actions';

import usersReducer from './users';

describe('Users reducer', () => {
  const initialState: UsersState = { usersList: [], isLoading: false };
  const usersList: User[] = [
    {
      username: 'test',
      avatarUrl: '',
      githubUrl: '',
      name: '',
      reposCount: 0,
    },
  ];

  describe('SET_USERS', () => {
    it('sets users', () => {
      const newState = usersReducer(initialState, {
        type: UsersActionTypes.SET_USERS,
        payload: usersList,
      });

      expect(newState).toEqual({ ...initialState, usersList });
    });

    it('sets isLoading to false', () => {
      const newState = usersReducer(
        { ...initialState, isLoading: true },
        {
          type: UsersActionTypes.SET_USERS,
          payload: initialState.usersList,
        },
      );

      expect(newState).toEqual({ ...initialState, isLoading: false });
    });
  });

  describe('SET_USER', () => {
    it('sets user', () => {
      const user = usersList[0];
      const newState = usersReducer(initialState, {
        type: UsersActionTypes.SET_USER,
        payload: user,
      });

      expect(newState).toEqual({ ...initialState, user });
    });

    it('sets isLoading to false', () => {
      const newState = usersReducer(initialState, {
        type: UsersActionTypes.SET_USER,
        payload: initialState.user,
      });

      expect(newState).toEqual({ ...initialState, isLoading: false });
    });
  });

  it('GET_USERS sets isLoading to true', () => {
    const newState = usersReducer(initialState, {
      type: UsersActionTypes.GET_USERS,
    });

    expect(newState).toEqual({ ...initialState, isLoading: true });
  });

  it('GET_USER sets isLoading to true', () => {
    const newState = usersReducer(initialState, {
      type: UsersActionTypes.GET_USER,
      payload: '',
    });

    expect(newState).toEqual({ ...initialState, isLoading: true });
  });
});
