import { combineReducers } from 'redux';
import counterReducer from './CountReducer';
import collectionReducer from './CollectionReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  collection: collectionReducer,
});

export default rootReducer;
