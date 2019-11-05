import { all } from 'redux-saga/effects';
import loadUserList from './loadCollectionSaga';
export default function* rootSaga() {
  yield all([...loadUserList]);
}
