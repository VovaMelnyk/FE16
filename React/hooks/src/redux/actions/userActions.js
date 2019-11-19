import { register, login } from "../../fetch";
import { userExist } from "./authAction";

export const setUser = user => ({
  type: "REGISTRATION_SUCCESS",
  payload: user
});

export const loginUser = user => ({
  type: "LOGIN_SUCCESS",
  payload: user
});

export const sendUser = user => dispatch => {
  return register(user)
    .then(res => res.json())
    .then(data => {
      dispatch(setUser(data.user));
      localStorage.setItem("token", JSON.stringify(data.user.token));
    })
    .then(() => dispatch(userExist()));
};

export const sendLoginUser = user => dispatch => {
  return login(user)
    .then(res => res.json())
    .then(user => {
      dispatch(loginUser(user));
      localStorage.setItem("token", JSON.stringify(user.token));
      return user;
    })
    .then(user => {
      if (user.error) {
        return;
      }
      dispatch(userExist());
    });
};
