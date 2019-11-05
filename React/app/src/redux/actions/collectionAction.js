import { FETCH_DATA, GET_DATA } from '../constants';

// export const fetchData = data => ({
//   type: FETCH_DATA,
//   payload: data,
// });

// export const getCollectionAsync = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => dispatch(fetchData(data)));
// };

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const getData = data => ({
  type: GET_DATA,
  payload: data,
});
