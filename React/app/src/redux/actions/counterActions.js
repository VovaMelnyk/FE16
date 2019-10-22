import { DECREMENT, INCREMENT, RESET } from '../constants';

export const reset = () => ({
  type: RESET,
});

export const increment = value => ({
  type: INCREMENT,
  payload: value,
});

export const decrement = () => ({
  type: DECREMENT,
});
