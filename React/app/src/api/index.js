export const getAllUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then(res =>
    res.json(),
  );
};

export const getSingleUser = id => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>
    res.json(),
  );
};
