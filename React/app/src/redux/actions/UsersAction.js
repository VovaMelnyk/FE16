import { ADD_USERS, FETCH_USERS } from '../constants';

export const addUser = data => ({
  type: ADD_USERS,
  payload: data,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
