import { FETCH_USER, SET_USER } from '../constants';

export const fetchUser = id => ({
  type: FETCH_USER,
  payload: id,
});

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});
