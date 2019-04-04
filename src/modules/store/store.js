import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import emailReducer from "../reducers/emailReducer.js";
//import other reducers

const rootReducer = combineReducers({
  email: emailReducer,
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
