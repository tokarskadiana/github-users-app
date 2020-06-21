/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import * as renderer from 'react-test-renderer';
import configureStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';

import { UsersActionTypes } from '../../actions';

import Users from './Users';

describe('Users component', () => {
  const mockStore: MockStoreCreator<AppState> = configureStore<AppState>([]);
  let store: MockStoreEnhanced;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
      users: {
        isLoading: false,
        usersList: [],
      },
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Users />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('dispatches GET_USERS action on mount', () => {
    expect(store.dispatch).toHaveBeenCalledWith({
      type: UsersActionTypes.GET_USERS,
    });
  });
});
