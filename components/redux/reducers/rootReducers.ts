import { combineReducers } from "redux";
import cursor from "../reducers/cursor";
import transition from "../reducers/transition";

const rootReducers = combineReducers({ cursor, transition });
export default rootReducers;
