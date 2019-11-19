import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  user: userReducer,
  isAuth: authReducer
});

export default rootReducer;
