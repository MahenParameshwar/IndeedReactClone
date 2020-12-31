import { reducer } from "./Login/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));