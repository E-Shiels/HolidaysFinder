import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./modules/reducers/reducer.js";
//import other reducers

//combine reducers

const middleware = [thunk];

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
