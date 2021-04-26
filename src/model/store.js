import { combineReducers, createStore } from "redux";
import { itemReducer } from "./reducer.js";
import { commonReducer } from "./common.js";

const itemStore = createStore(combineReducers({
    itemReducer,
    commonReducer
}
));

export { itemStore };