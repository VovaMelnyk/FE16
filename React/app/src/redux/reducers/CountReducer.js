import { DECREMENT, INCREMENT, RESET } from '../constants';

const initialState = 10;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return 0;
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
