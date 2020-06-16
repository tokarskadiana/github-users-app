import { ReducersMapObject, combineReducers } from 'redux';

const reducersMap: ReducersMapObject = {
  example: (state: Store = {}) => state,
};

export default combineReducers<Store>(reducersMap);
