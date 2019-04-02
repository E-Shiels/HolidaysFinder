import { createStore, applyMiddleware, combineReducers } from "redux";
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

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
