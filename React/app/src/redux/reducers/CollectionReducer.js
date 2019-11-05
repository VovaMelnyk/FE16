import { FETCH_DATA, GET_DATA } from '../constants';
const initialState = [];

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case GET_DATA:
      return [...action.payload];
    default:
      return state;
  }
}

export default collectionReducer;
