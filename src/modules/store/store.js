import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import email from "../reducers/emailReducer.js";
//import other reducers

//combine reducers
const rootReducer = combineReducers({
  email,
  //import other reducers
})

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
  applyMiddleware(...middleware),
)
);
