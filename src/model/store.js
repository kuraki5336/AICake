import { combineReducers, createStore } from "redux";
import { itemReducer } from "./reducer.js";
import { commonReducer } from "./common.js";
import { storeHeader } from "./storeHeader.js";

const store = createStore(combineReducers({
    itemReducer,
    commonReducer,
    storeHeader
}
));

export { store };