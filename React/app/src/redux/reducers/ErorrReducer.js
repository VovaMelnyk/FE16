import { SHOW_ERROR } from '../constants';

const initialState = false;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
