import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import emailReducer from "../reducers/emailReducer.js";
import holidayReducer from "../reducers/holidayReducer.js";
//import other reducers

const rootReducer = combineReducers({
  email: emailReducer,
  holidays: holidayReducer
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
