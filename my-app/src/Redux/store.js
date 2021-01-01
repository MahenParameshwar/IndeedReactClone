import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { searchReducer } from "./Search/reducer";
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer";

const rootReducer = combineReducers({search:searchReducer,login:loginReducer})
const createComposer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,createComposer(applyMiddleware(thunk)))
