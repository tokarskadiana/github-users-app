import { Store as ReduxStore } from 'redux';

import './users';

declare global {
  interface AppState {
    users: UsersState;
  }

  interface Window {
    store?: ReduxStore<AppState>;
  }
}
