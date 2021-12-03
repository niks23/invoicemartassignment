import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(
    logger
))

export default store;