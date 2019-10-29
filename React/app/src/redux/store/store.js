import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { ownLogger, templateMiddleware, ping } from '../middlewares/ownLogger';
import rootReducer from '../reducers';

const middelwars = [thunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelwars)),
);

export default store;

// applyMiddleware(templateMiddleware, thunk, ownLogger)
