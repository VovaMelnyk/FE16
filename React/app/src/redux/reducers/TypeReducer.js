const initialState = '';

const compleat = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPLETED':
      return true;
    case 'UNCOMPLETED':
      return false;
    case 'ALL':
      return '';
    default:
      return state;
  }
};

export default compleat;
