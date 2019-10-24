import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../constants';

export const addTask = obj => ({
  type: ADD_TASK,
  payload: obj,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = () => ({
  type: EDIT_TASK,
});
