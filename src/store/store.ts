import {
  Store as ReduxStore,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersApiMiddleware from '../middleware/users/users-api';
import { root } from '../reducers';

const store: ReduxStore<AppState> = createStore(
  root,
  composeWithDevTools(applyMiddleware(usersApiMiddleware)),
);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<AppState>({
      ...require('../reducers/root').default,
    });

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
