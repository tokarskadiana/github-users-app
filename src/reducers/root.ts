import { combineReducers, ReducersMapObject } from 'redux';

const initialStore: Store = {
  users: [],
  selectedUser: undefined
}

export default combineReducers<Store>({
  example: (state: Store = initialStore) => state,
} as ReducersMapObject);
