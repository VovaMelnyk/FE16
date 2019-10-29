import { FETCH_DATA } from '../constants';
const initialState = [];

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return [...action.payload];
    default:
      return state;
  }
}

export default collectionReducer;
