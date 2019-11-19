const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTRATION_SUCCESS":
    case "LOGIN_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
