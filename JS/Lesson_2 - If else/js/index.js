// console.log(Math.floor(2.99));
// console.log(Math.ceil(2.000000000001));
// console.log(Math.round(2.499999));
// console.log(Math.abs(10));
// console.log(Math.pow(9,2));
// console.log(Math.sqrt(4));
// console.log(Math.max(-50,-40));
// console.log(Math.min(9/12,3/4));
// console.log(Math.floor(Math.random()*500)+501);
// console.log(Math.floor(Math.random()*100)+1);

// 0 - 1
// let randomNumber = Math.floor(Math.random()*100)+ 1;
// console.log(randomNumber);

// let password = prompt('Enter password');
// console.log(password.length >= 4);


// let a = 5;
// let b = '5';
// console.log(a == b);
// console.log(a === b); 

//
// let a = NaN,
//     b = NaN;
// console.log(a != b);
// console.log(a !== b);
// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = null;
// console.log(a == b);
// console.log(a === b);
//
// let a = null,
// b = null;
// console.log(a == b);
// console.log(a === b);

// let a = null,
// b = undefined;

// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = undefined;
// console.log(a == b);
// console.log(a === b);
//
// let a = 'a',
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = 'H';
// let b = 'h';

// console.log(a == b);
// console.log(a === b);

// let c = "Hello";
// let d = "Hello";
// console.log(c == d);
// console.log(c === d);

// let a = 5;
// let b = 10;

// console.log(a >= b);
// let register = true;
// let isPremium = false;

// console.log(register && isPremium);
// let login = 'user';
// let email = 'dou@gmail.com';

// let userData = 'dou@gmail.com';
// console.log(userData === login || userData === email);
// || or 
// && and
// ! not

// console.log('Отримав відпустку' && "Квитки" && 'Train');
// console.log('Отримав відпустку' || "Квитки" || 'Train');

// false
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(false));

// true
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(' '));
// console.log(Boolean(-5));

// console.log(0 || '' || '0');
// console.log(0 || null || '0');
// console.log(0 || undefined || null);
// console.log(4 + 5 === 8 || 5 * 4 === '20' || 'q' + 'w' === 'w');
// console.log(0 || '' || 0);
// console.log(0 || null || 'undefined'); 
// console.log(NaN || null || 5);
// console.log(28 || null || '');
// console.log(Infinity || 55 || NaN);
// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);
// console.log('a' && 1 && 2);
// console.log('a' && 0 && 2);
// console.log('0' && NaN && 2);
// console.log('' && NaN && 2);
// console.log(' ' && NaN && 2);
// console.log({age:25} && 'null' && 2);
// console.log({age:25} && null && 2);
// console.log({age:25} && undefined && 2);
// console.log({age:25} && 8 && -Infinity);
// console.log(false && 'false' && -Infinity);
// console.log('true' && -0 && null);

// const correctLogin = 'admin';
// const userLogin = prompt('Enter login');

// if(userLogin !== correctLogin) {
//     console.log('Error');
// } else {
//     console.log('Hello');
// }

// const userNumber = prompt('enter number 1-3');
// let title = null;

// if (Number(userNumber) === 1) {
//     title = 'Error';
// } else if (Number(userNumber) === 2) {
//     title = 'Congratulation';
// } else if (Number(userNumber) === 3) {
//     title = 'Info';
// } else {
//     alert ('Wrong number');
// }

// switch (Number(userNumber)) {
//     case 1:
//         title = 'Error';
//         break;
//     case 2:
//         title = 'Congratulation';
//         break;
//     case 3:
//         title = 'Info';
//         break;
//     default:
//         alert('Wrong number');
//         break;
// }

// title = Number(userNumber) === 1 ? 'Error' : Number(userNumber) === 2 ? 'congratulation' : Number(userNumber) === 3 ? 'info' : alert('Wrong');

// console.log(title);

// const password = prompt('Enter password');

// condition ? true : false
// let result = null;
// if(password.length >= 4) {
//     result = 'correct';
// } else {
//     result = 'error';
// }
// result = password.length >= 4 || password ? 'correct' : 'error';