import { Store as ReduxStore } from 'redux';

declare global {
  interface User {
    username: string;
  }

  interface Store {
    users: User[];
    selectedUser: User | undefined;
  }

  interface Window {
    store?: ReduxStore<Store>;
  }
}
