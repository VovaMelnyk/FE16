import { FETCH_USER, SET_USER } from '../constants';
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return state;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
