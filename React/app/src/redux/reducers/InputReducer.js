import { INPUT_CHANGE, CLEAR_INPUT } from '../constants';

const initialState = '';

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default inputReducer;
