import { FETCH_DATA } from '../constants';

export const fetchData = data => ({
  type: FETCH_DATA,
  payload: data,
});

export const getCollectionAsync = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(fetchData(data)));
};
