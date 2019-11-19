export const userExist = () => ({
  type: "USER_EXIST"
});

export const userLogOut = () => ({
  type: "USER_LOG_OUT"
});

// const register = ({ email, password }) => {
//   return fetch("http://localhost:4000/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password
//     })
//   });
// };

// export const registerUser = user => dispatch => {
//   return register(user)
//     .then(res => res.json())
//     .then(data => dispatch(setUser(data)))
//     .then(() => dispatch(userExist()));
// };
