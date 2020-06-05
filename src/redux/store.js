import { createStore, combineReducers } from "redux";
import {mainReducer} from "./mainReducer.js"

let reducers = combineReducers({main:mainReducer})
const store = createStore(reducers)

window.store=store;

export default store;

