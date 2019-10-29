import { DECREMENT, INCREMENT, RESET, PING } from '../constants';

export const reset = () => ({
  type: RESET,
  meta: {
    type: PING,
  },
});

export const increment = value => ({
  type: INCREMENT,
  payload: value,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const fetchCollection = data => ({
  type: 'FETCH_ITEM',
  payload: data,
});

export const asyncFetchCollection = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(fetchCollection(data)));
};
