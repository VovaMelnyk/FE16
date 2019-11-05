import { ADD_USERS, FETCH_USERS } from '../constants';

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state;
    case ADD_USERS:
      return action.payload;

    default:
      return state;
  }
};

export default usersReducer;
