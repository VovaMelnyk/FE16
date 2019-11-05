import { put, call, takeEvery } from 'redux-saga/effects';
import { loaderOn, loaderOff } from '../actions/loaderAction';
import { getAllUsers, getSingleUser } from '../../api';
import { addUser } from '../actions/UsersAction';
import { showError } from '../actions/errorAction';
import { FETCH_USERS, FETCH_USER } from '../constants';
import { setUser } from '../actions/userActions';

function* loadUserList() {
  try {
    yield put(loaderOn());
    const data = yield call(getAllUsers);
    yield put(addUser(data));
    yield put(loaderOff());
  } catch (error) {
    put(showError());
  }
}

function* loadSingleUser(action) {
  try {
    yield put(loaderOn());
    const user = yield call(getSingleUser, action.payload);
    yield put(setUser(user));
    yield put(loaderOff());
  } catch (error) {
    put(showError());
  }
}

export default [
  takeEvery(FETCH_USERS, loadUserList),
  takeEvery(FETCH_USER, loadSingleUser),
];

// import { put, takeEvery, call } from 'redux-saga/effects';
// import { loaderOff, loaderOn } from '../actions/loaderAction';
// import { FETCH_DATA, FETCH_USER } from '../constants';
// import { getAllUsers, getSingleUser } from '../../api';
// import { getData } from '../actions/collectionAction';
// import { setUser } from '../actions/userActions';

// function* loadCollection() {
//   try {
//     yield put(loaderOn());
//     const data = yield call(getAllUsers);
//     yield put(getData(data));
//     yield put(loaderOff());
//   } catch (error) {
//     console.log('error');
//   }
// }

// function* loadSingleUser(action) {
//   try {
//     yield put(loaderOn());
//     const singleUser = yield call(getSingleUser, action.payload);
//     yield put(setUser(singleUser));
//     yield put(loaderOff());
//   } catch (error) {
//     console.log('error');
//   }
// }

// export default [
//   takeEvery(FETCH_DATA, loadCollection),
//   takeEvery(FETCH_USER, loadSingleUser),
// ];
