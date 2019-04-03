import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer.js";
//import other reducers

//combine reducers
const reducers = combineReducers({
  reducer,
  //import other reducers
})

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware),
)
);
