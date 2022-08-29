import quoteReducers from "./quoteReducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(quoteReducers, applyMiddleware(thunk));

export default store;
