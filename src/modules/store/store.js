import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import emailReducer from "../reducers/emailReducer.js";
import holidayReducer from "../reducers/holidayReducer.js";

const rootReducer = combineReducers({
  email: emailReducer,
  holidays: holidayReducer
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
  applyMiddleware(...middleware),
)
);
