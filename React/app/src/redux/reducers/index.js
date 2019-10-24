import { combineReducers } from 'redux';
import counterReducer from './CountReducer';
import collectionReducer from './CollectionReducer';
import inputReducer from './InputReducer';
import taskListReducer from './TaskListReducer';
// import compleat from './TypeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  collection: collectionReducer,
  input: inputReducer,
  taskList: taskListReducer,
});

export default rootReducer;
