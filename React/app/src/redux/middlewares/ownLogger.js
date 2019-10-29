// const awesomeMiddleware = function(state) {
//   return function(next) {
//     return function(action) {
//       // function logic
//       next(action);
//     };
//   };
// };

// const awesomeMiddleware = state => next => action => {
//   // function logic
//   next(action);
// };

// console.log(add(2)(3)); // 5

// const add = a => b => a + b;

import { RESET } from '../constants';

export const ownLogger = store => next => action => {
  console.group(action.type);
  console.info('prev state', store.getState());
  console.info('action', action);
  next(action);
  console.info('next state', store.getState());
  console.groupEnd(action.type);
};

export const ping = store => next => action => {
  if (action.type === RESET) {
    console.log('PING');
  }
  next(action);
};

// import { PING } from '../constants';

// export const ownLogger = store => next => action => {
//   console.group(action.type);
//   console.info('prev state', store.getState());
//   console.info('dispatching', action);
//   next(action);
//   console.info('next state', store.getState());
//   console.groupEnd(action.type);
//   //   next(action);
// };

// export const templateMiddleware = store => next => action => {
//   if (action.meta && action.meta.type === PING) {
//     console.log('PING');
//   }
//   next(action);
// };
