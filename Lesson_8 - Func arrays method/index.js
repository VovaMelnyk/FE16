// Імперативний та декларативний підхі
// Чистота ф-ї
// let arr = [1, 2, 3, 4, 5];

// function create(arr) {
//     for (let el of arr) {
//         el = el*2
//     }
//     return arr;
// }

// function create2(arr) {
//     let newArray = [];
//     for (let el of arr) {
//         newArray.push(el*2);
//     }
//     return newArray;
// }

// console.log('name',create(arr));
// console.log('second',create2(arr));
// Функціональні методи масивів
let a = [5, 3, 2, 4, 1, 6, 10, 8, 9, 7];
// array.method(function (el, index, arr) {});
// map
// let result = [];
// for (let i = 0; i < a.length; i++) {
//     result.push(a[i]*2);
// }
// console.log(result);
// let result = a.map(function (el) {
//     return el * 2;
// });
// let result = a.map(el => {
//     return el * 2;
// })
// let result = a.map(el => el * 2);
// console.log(a);
// console.log(result);
// filter
// let result = a.filter(function(el){
//     if(el < 5) {
//         return el;
//     }
// })
// let result = a.filter(el => {
//     if(el < 5) {
//         return el;
//     }
// })
// let result = a.filter(el => el < 5 ? el : null);
// let result = a.filter(el => el < 5);
// console.log(a);
// console.log(result);
// find
// let result = a.find(el => el === 7);
// console.log(result);
// every
// let result = a.every(el => el < 20);
// console.log(result);
// some
// let result = a.some(el => el > 20);
// console.log(result);
// reduce
// let total = 0;
// for (let el of a) {
//     total += el;
// }
// console.log(total);
// let result = a.reduce(function(acc, el) {
//     return acc + el;
// }, 0);
// let result = a.reduce((acc, el) => acc + el, 0);
// let cart = [{
//         price: 10,
//         name: 'Phone'
//     },
//     {
//         price: 15,
//         name: 'car'
//     },
//     {
//         price: 3,
//         name: 'shoes'
//     }
// ]

// let result = cart.reduce((acc , el) => acc + el.price, 0);
// console.log(result);
// sort
// a.sort(function (a, b) {
//     if (a > b) {
//         return -150
//     } else {
//         return 197842
//     }
// })
// a.sort((a, b) => a - b);
// console.log(a);

// chaning
// [5,3] // [3, 5]
// a = 5
// b = 3

// const scientist = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905
//   },
//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909
//   }
// ];

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A