import {
  Store as ReduxStore,
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";

import { root } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import usersApiMiddleware from "../middleware/users/users-api";

const store: ReduxStore<AppState> = createStore(
  root,
  composeWithDevTools(applyMiddleware(usersApiMiddleware))
);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<AppState>({
      ...require("../reducers/root").default,
    });

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
