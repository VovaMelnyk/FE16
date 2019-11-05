import { combineReducers } from 'redux';
import counterReducer from './CountReducer';
import collectionReducer from './CollectionReducer';
import inputReducer from './InputReducer';
import taskListReducer from './TaskListReducer';
// import compleat from './TypeReducer';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import usersReducer from './UsersReducer';
import errorReducer from './ErorrReducer';

const rootReducer = combineReducers({
  // collection: collectionReducer,
  loader: loaderReducer,
  user: userReducer,
  usersList: usersReducer,
  error: errorReducer,
});

export default rootReducer;
