import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combineReducer = combineReducers({
  products: reducer
});
export const store = legacy_createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);
