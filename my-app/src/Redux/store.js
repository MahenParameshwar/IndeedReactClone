import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { searchReducer } from "./Search/reducer";
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";

const rootReducer = combineReducers({search:searchReducer,login:loginReducer,register:registerReducer})
const createComposer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,createComposer(applyMiddleware(thunk)))
