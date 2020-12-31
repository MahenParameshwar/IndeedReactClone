import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { searchReducer } from "./Search/reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({search:searchReducer})
const createComposer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,createComposer(applyMiddleware(thunk)))
