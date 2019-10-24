import { createSelector } from 'reselect';

export const getInputValue = state => state.input;

export const getTaskList = state => state.taskList;

// export const getTaskListCount = state => getTaskList(state).length;

export const getTaskListCount = createSelector(
  [getTaskList],
  taskList => taskList.length,
);

// export const getAllListItems = state => state.collection;

// export const getCompleat = state => state.compleat;

// export const getListItemCount = createSelector(
//   [getAllListItems],
//   items => items.length,
// );

// export const getFilteredItems = createSelector(
//   [getAllListItems, getCompleat],
//   (items, compleat) => items.filter(el => el.compleat === compleat),
// );
