import { LOADER_OFF, LOADER_ON } from '../constants';

const initialState = false;

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return true;

    case LOADER_OFF:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
