const initialState = [];

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
    default:
      return state;
  }
}

export default collectionReducer;
