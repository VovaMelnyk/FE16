// pending - Очікування
// resolve - Виконано
// rejected - помилка

// template

// const promise = new Promise((ok, err) => {
//     const arr = [];
//     for (let i = 0; i < 100002; i++) {
//         arr.push(i);
//     }

//     if ((arr.reduce((acc, el) => acc + el)) % 2 === 0) {
//         ok(arr)
//     } else {
//         err('Fatal');
//     }
// });

// promise
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


// function asyncLoop(iterationCount) {
//     return new Promise((ok, fatal) => {
//         let arr = [];
//         for (let i = 0; i < iterationCount; i++) {
//             arr.push(i);
//         }

//         if ((arr.reduce((acc, el) => acc + el)) % 2 === 0) {
//             ok(arr)
//         } else {
//             fatal(`Fatal in promis ${iterationCount}`);
//         }
//     })
// }

// asyncLoop(100000)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(data => console.log(data))


// Promise.all([asyncLoop(10), asyncLoop(100000), asyncLoop(1000000)])
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
// let arr = [asyncLoop(10), asyncLoop(100000)];
// console.log(arr);
// arr.map((el, i) => {
//     el
//         .then(data => console.log(data))
//         .catch(err => console.log(i))
// })

// Promise.race(arr)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
