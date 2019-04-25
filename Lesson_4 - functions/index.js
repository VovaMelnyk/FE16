// part one
// create

// function addTwoNumbers() {
//     console.log(10 + 12);
// }

// addTwoNumbers();

// const addTwoNumbers = function() {
//     console.log(10 + 12);
// }

// addTwoNumbers();

// function checkYear(year, month) {
//     if(typeof year !== 'number') {
//         return 'wrong type';
//     }
//     if (year % 4 === 0) {
//         return true;
//     } 
//     return false;
// }
// // let result = checkYear();
// console.log(checkYear(2048, 'March'));
// console.log(checkYear(1999, 'jUNE', true));
// console.log(checkYear(35, 'April'));
// console.log(checkYear(666));

// 1) Створити цикл що наповнить масив числами 1 - 2019 +
// 2) Цикл який перевіряє чи рік високосний.
// 2,1) Створити ф-ю перевірки року з одним параметром +
// 3) Наповнити новий масив значеннями
// 4) Визначити довжину масиу.

// function createYearsArr () {
//     const yearsArr = [];
//     for (let i = 1; i <= 2019; i +=1) {
//         yearsArr.push(i);
//     }
//     return yearsArr;
// }

// function checkYear(year) {
//     if(typeof year !== 'number') {
//         return;
//     }
//     // if( year % 4 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//    return year % 4 === 0 ? true : false;
// }
// // def parameters

// function createFinalResultArr (arr = []){
//     const finalResult = [];
//     for (let el of arr) {
//         let conditionResult = checkYear(el);
//         if(conditionResult) {
//             finalResult.push(el);
//         }
//     }
//     return finalResult;
// }

// function start () {
//     let result = createYearsArr(); // масив
//     return createFinalResultArr(result).length; // cb
// }

// console.log(checkYear);

// arguments
// function sum () {
//     // console.log(arguments);
//     let arr = Array.from(arguments);
//     // console.log("TCL: sum -> arr", arr);
//     let acc = 0;
//     for (let el of arr) {
//         acc += el;
//     }
//     return acc;
// }
// console.log(sum(1,2,3)); // 6
// console.log(sum(1,10)); // 11
// console.log(sum(1,2,3,5,10,50)); //71

// call stack

// console.log('First');
// console.log('Second');
// function start () {
//  createFinalArr (
//       checkYear() 
//       )  
// }
// Arrow func

// 1) З строки зробити масив
// 2) Перевернути масив
// 3) з реверса робимо строку
// 4) Порівняння

const checkPalindrome = function (str) {
    // let arr = str.split('');
    // arr.reverse();
    // let newStr = arr.join('');
    return str === str.split('').reverse().join('');
}

// const isPalinfrome = (str) => {
//     return str === str.split('').reverse().join('');
// }

// const isPalinfrome = str => {
//     return str === str.split('').reverse().join('');
// }

// const isPalinfrome = str => str === str.split('').reverse().join('');

// console.log(checkPalindrome('olo')); // true
// console.log(checkPalindrome('potmt')); // false

// Scope

// let a = 5;
// let b = 50;
// function one () {
//     let a = 10;
//     console.log('in first',a);
//     console.log('in first',b);

//     function second () {
//         let b = 100;
//         console.log('in second',a);
//         console.log('in second',b);
//     }
//     second();}

// one();

// Clousure






















// let input = prompt('sfsfsdfs');
// if (input === null || Number.isNaN(Number(input))) {
//     console.log('Error');
// }


// function sumArray () {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }

// function addTwoNumbers(number1,number2) {
//   // console.log(5 + 6);
//   return number1 + number2;
// }

// let login = ['user', 'admin', 'dart'];
// let userName = ['superUser', 'superAdmin', 'superDart'];
// let nickName = ['user23', 'admin4569q', 'dart784545weqwe'];


// function checkLogin(array) {
//   let userStr = prompt('Enter word');
//   // let result = array.includes(userStr);
//   // return result;
//   return array.includes(userStr);
// }

// console.log(checkLogin(login));
// console.log(checkLogin(userName));
// console.log(checkLogin(nickName));


// console.log(addTwoNumbers(10,20));
// console.log(addTwoNumbers(5,7));
// console.log(addTwoNumbers(2,8));




// call

// return
//
// function showText() {
//     let str = 'I am function';
//    return str;
// }
// //
// console.log(showText());
// function calculator(a, b) {
//     let sum = a + b; // 15
//     let mult = a * b; // 50
//     let minus = a - b; // 5
//     let div = a / b; // 2
//     let result = sum + mult + minus + div; // 72
//     return ['сума ' + sum, mult, minus, div, result];
// }
//
// let functionResult = calculator(10, 5);
// console.log(functionResult);

// 1) Написати ф-ю яка приймає рік
// 2) Повертає нам через алерт століття.

// const century = function(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(1958)); // 20
// console.log(century(2018)); // 21
// console.log(century(1548)); // 16




// function showCentury (year) {
//     // let century = Math.ceil(year/100);
//     // return century;
//     return Math.ceil(year/100);
// }
// let userYear = +prompt('Enter year');
// console.log(showCentury(userYear));


// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// 3,1 ) Для перетворення використати нашу ф-ю showCentury.

// function showCentury(year) {
//     let result = Math.ceil(year / 100);
//     return `${year} рік - ${result} століття`;
// }

// function convertCentury() {
//     let arr = [];
//     do {
//         let userInput = prompt('Введіть будь-який номер');
//         if (userInput === null || isNaN(userInput)) {
//             break;
//         }
//         arr.push(+userInput);
//     } while (true);

//     for (let i of arr) {
//         console.log(showCentury(i));
//     }

// }
// convertCentury();

// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні

// console.log(showYear(2016)); // true
// console.log(showYear(2018)); // false
// console.log(showYear(2000)); // true

// function showYear(year) {
//     // if (year % 4 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return year % 4 === 0;
// }


// function add(a= 10, b = 100, c = 0) {
//     return a + b + c;
// }
// console.log(add(50, 60, 2));
// console.log(add());

// function m(a = 1, b = 5, c = 10) {
//     if (a === null) {
//         return b * c
//     }
//     return a * b * c
// }

// console.log(m(null, 5 , 10));
// arguments

// function add() {
//   // console.log(arguments);
//   let arr = Array.from(arguments);
//   // console.log(arr);
//   let total = 0;
//   for (let number of arr) {
//     total += number
//   }
//   return total;
// }
// console.log(add(5, 10, 20));
// console.log(add(1));
// console.log(add(7, 4, 5, 6, 10));

// function transformPxtoRem(px, fontSize) {
//   let rem = `${px/fontSize}rem`;
//   return rem;
// }
// console.log(transformPxtoRem(250,10));
// console.log(transformPxtoRem(12,12));
// console.log(transformPxtoRem(1,10));
// console.log(transformPxtoRem(1024,16));

// let logins = ['sdfs', 'a', 'b'];
// let passwords = ['112345', 'qqqqq', 'qwe'];

// function checkLogin(login, loginArr) {
//   return loginArr.includes(login);
// }

// function checkPassword(password, passwordArray) {
//   return passwordArray.includes(password);
// }

// function checkForm(checklogin, checkloginArr, checkpassword, checkpasswordArray) {
//   let loginResult = checkLogin(checklogin, checkloginArr);
//   let passwordResult = checkPassword(checkpassword, checkpasswordArray);
//   // if(checkLogin(checklogin, checkloginArr) && checkPassword(checkpassword, checkpasswordArray)) {
//   //   alert('Hello')
//   // } else {
//   //   alert('Fatal')
//   // }
//   if (loginResult && passwordResult) {
//     alert('Hello')
//   } else {
//     alert('Fatal')
//   }
// }

// checkForm('a', logins, '1111', passwords);