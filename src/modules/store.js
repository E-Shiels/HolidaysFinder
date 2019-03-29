import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './modules/reducers/reducer.js'
import { createStore } from 'redux'

const store = createStore(reducer)
