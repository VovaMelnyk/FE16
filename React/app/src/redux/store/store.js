import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;

// applyMiddleware(templateMiddleware, thunk, ownLogger)
