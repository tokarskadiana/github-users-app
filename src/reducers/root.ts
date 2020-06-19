import { ReducersMapObject, combineReducers } from "redux";
import users from "./users";

const reducersMap: ReducersMapObject = { users };

export default combineReducers<AppState>(reducersMap);
