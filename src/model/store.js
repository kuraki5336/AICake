import { combineReducers, createStore, applyMiddleware } from "redux";
import { itemReducer } from "./reducer.js";
import { commonReducer } from "./common.js";
import { storeHeader } from "./storeHeader.js";
import thunk from "redux-thunk";

const store = createStore(combineReducers(
    {
        itemReducer,
        commonReducer,
        storeHeader,
    },
    undefined,
    applyMiddleware(thunk)
));

export { store };