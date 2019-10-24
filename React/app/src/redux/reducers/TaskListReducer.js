import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../constants';
const initialState = [];

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(el => el.id !== action.payload);
    case EDIT_TASK:
      return;
    default:
      return state;
  }
};

export default taskListReducer;
