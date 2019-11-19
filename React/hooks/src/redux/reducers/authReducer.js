const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_EXIST":
      return true;
    case "USER_LOG_OUT":
      return false;
    default:
      return state;
  }
};

export default authReducer;
