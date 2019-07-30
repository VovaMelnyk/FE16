// Iterable standart ES6 (arr, str, DOM colection)
// use iterator in for of and spread

// let arr = ['React', 'JS', 'CSS'];
// console.log(arr);

// let obj = {
//     name: 'Bob',
//     age: 48
// }
// console.log(obj);
// for (let str of arr) {
//     console.log(str);
// }

// for(let key of obj) {
//     console.log(key);
// }

// console.log(typeof arr[Symbol.iterator]);
// console.log(arr [Symbol.iterator]());
// let iterator = arr[Symbol.iterator](); // obj with one method next
// // console.log(iterator);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function i() {
//     return {
//         next() {
//             return {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// for of logic 

// let iterator = arr[Symbol.iterator]();
// let next = iterator.next();

// while(!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }

// for (let el of arr) {
//     console.log(el);
// }

// custom iterator

// let idGenerator = {
//     [Symbol.iterator]() {
//         return {
//             next() {
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         };
//     }
// }

// let range = {
//     from: 1,
//     to: 5,
// }

// for (let num of range) {
//     console.log(num); // 1, 2, 3 ,4, 5
// }

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         let current = this.from;
//         let last = this.to;
//         return {
//             next() {
//                 if(current <=  last) {
//                     return {
//                         done: false,
//                         value: current++
//                     }
//                 } else {
//                     return {
//                         done: true,
//                         value: undefined
//                     }
//                 }
//             }
//         }
//     }
// }

// for (let num of range) {
//     console.log(num); // 1, 2, 3 ,4, 5
// }

// const myFavouriteAuthors = {
//     allAuthors: {
//       fiction: [
//         'Agatha Christie', 
//         'Dr. Seuss'
//       ],
//       scienceFiction: [
//         'Neal Stephenson',
//         'Arthur Clarke',
//         'Isaac Asimov', 
//         'Robert Heinlein'
//       ],
//       fantasy: [
//         'J. R. R. Tolkien',
//         'J. K. Rowling',
//         'Terry Pratchett'
//       ],
//     },
//     [Symbol.iterator]() {
//       const genres = Object.values(this.allAuthors);
//       console.log(genres);

//       let currentAuthorIndex = 0;
//       let currentGenreIndex = 0;

//       return {
//         // Implementation of next()
//         next() {
//           // authors according to current genre index
//           const authors = genres[currentGenreIndex];

//           // doNotHaveMoreAuthors is true when the authors array is exhausted.
//           // That is, all items are consumed.
//           const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
//           if (doNothaveMoreAuthors) {
//             // When that happens, we move the genre index to the next genre
//             currentGenreIndex++;
//             // and reset the author index to 0 again to get new set of authors
//             currentAuthorIndex = 0;
//           }

//           // if all genres are over, then we need tell the iterator that we 
//           // can not give more values.
//           const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
//           if (doNotHaveMoreGenres) {
//             // Hence, we return done as true.
//             return {
//               value: undefined,
//               done: true
//             };
//           }

//           // if everything is correct, return the author from the 
//           // current genre and incerement the currentAuthorindex
//           // so next time, the next author can be returned.
//           return {
//             value: genres[currentGenreIndex][currentAuthorIndex++],
//             done: false
//           }
//         }
//       };
//     }
//   };

//   for (const author of myFavouriteAuthors) {
//     console.log(author);
//   }

//   console.log(...myFavouriteAuthors)


// Generators

// normal function 
// function normalFunc() {
//     console.log('I')
//     console.log('cannot')
//     console.log('be')
//     console.log('stopped.')
//   }
//   normalFunc();
//   normalFunc();


// function* generator() {}
// function * generator() {}
// function *generator() {}

// function* generatorFunction() { 
//     console.log('This will be executed first.');
//     yield 'Hello, ';
//     console.log('I will be printed after the pause');  
//     yield 'World!';
//   }
//   const generatorObject = generatorFunction();
// //   console.log(generatorObject);

//   console.log(generatorObject.next().value);
//   console.log(generatorObject.next().value);
//   console.log(generatorObject.next());

// function* generator(e) {
//     yield e + 10;
//     yield e + 25;
//     yield e + 33;
//   }
//   let generate = generator(10);
//   console.log(generate.next().value);
//   console.log(generate.next().value);
//   console.log(generate.next().value);
//   console.log(generate.next().value);

// function * naturalNumbers() {
//     let num = 1;
//     while (true) {
//       yield num;
//       num = num + 1
//     }
//   }
//   const numbers = naturalNumbers();
//   console.log(numbers.next().value)
//   console.log(numbers.next().value)

// async await 

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getPost () {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	const data = await response.json();
// 	console.log(data);
// }

// getPost();

// function* generatorCreator () {
//     const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1'); 
//     const data = yield response.json();
//     console.log(data);
//   }

//   function getPost() {
//     const generator = generatorCreator();

//     function next(value) {
//       const nextResult = generator.next(value);
//       console.log(nextResult);
//       if (nextResult.done) return nextResult.value;
//       nextResult.value.then(next);
//     };

//     next();
//   }

//   getPost();  

// function loop(count) {
//     let arr = [];
//     let i = 0;
//     while (i < count) {
//         arr.push(i);
//         i++
//     }
//     return arr
// }

// async function calculate() {
//     try {
//         let result = await loop(10000000);
//         let data = await result.sort((a, b) => a - b);
//         let filterArr = await data.filter(el => el % 2 === 0);
//         return filterArr.length;
//     } catch (err) {
//         console.log(err);
//     }

// }

// calculate().then(result => console.log(result));

// console.log('Start');