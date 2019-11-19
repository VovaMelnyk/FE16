export const register = ({ email, password }) => {
  return fetch("http://localhost:4000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
};

export const login = ({ email, password }) => {
  return fetch("http://localhost:4000/login", {
    method: "POST",
    credentials: "include", // Needed to include the cookie
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
};

// const refresh = () => {
//   fetch("http://localhost:4000/protected", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${user.accesstoken}`
//     }
//   });
// };
