const initialState = [
  { id: 1, text: 'Do hw', compleat: false },
  { id: 2, text: 'buy food', compleat: true },
  { id: 3, text: 'Hello', compleat: false },
];

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
    default:
      return state;
  }
}

export default collectionReducer;
