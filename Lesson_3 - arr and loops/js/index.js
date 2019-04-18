// let arr2 = new Array();
// let userWorkHours = [5, 10, 4, 8, 8];
// console.log("TCL: userWorkHours", userWorkHours)
// console.log("TCL: userWorkHours.length", userWorkHours.length);

// let cart = [120];
// push
// if (cart.length >= 2) {
//     console.log('Hello');
// } else {
//     console.log('We have bonus for you if you order 2 or more goods');
//     cart.push(130, 250);
// }
// pop
// let deletedElement = cart.pop();
// console.log("TCL: deletedElement", deletedElement);
// console.log("TCL: cart", cart);
// let result = cart.push(45552);
// console.log("TCL: result", result);

// cart.unshift(54, 789, 456, 0);
// cart.shift();
// console.log(cart);
// length
// let arr = ['Bob', 'Homer', 'Bender', 'Marje'];
// console.log(arr[arr.length - 1]);
// arr[10] = 54;
// console.log(arr);
// console.log(arr[10]);

// let activeLots = [45];
// let premium = true;
// if (activeLots.length === 0 || premium === true) {
//     console.log('Happy bitting');
// }
// splice
// let arr = [4, 58, 74, 652, 12, 36, 547, 8];
// let copyArr = arr.slice();
// copyArr.splice(2,1) // delete
// arr.splice(2,0, 999); // paste
// arr.splice(3,2,78,95,12,10) // replace
// console.log(copyArr);
// console.log(arr);

// indexOf

// let arr = [41, 12, 54, 745, 78, 965];
// let index = arr.indexOf(3);
// console.log("TCL: index", index);

// includes

// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150));

// concat

// let first = [12, 10];
// let second = [25, 15];
// let third = [10, 2];
// let fourth = [3, 5];
// let finalArray = [];
// let result = finalArray.concat(first, second, third, fourth)
// console.log("TCL: result", result);

// reverse
// let arr = [1, 5, 9, 8, 7, 10];
// arr.reverse();
// console.log(arr);
// let newArr = arr.slice().reverse();
// console.log(arr);
// console.log(newArr);

//loops

// while

// 1) лічильник
// 2) Умова виконання циклу
// 3) Тіло циклу
// 4) Лічильник має змінюватися

// let counter = 10;
// let arr = [];

// while (counter < 5) {
//     let userNumber = prompt('Enter number');
//     arr.push(Number(userNumber));
//     // counter = counter + 1;
//     counter +=1;
// }

// do {
    // let userNumber = prompt('Enter number');
    // arr.push(Number(userNumber));
//     counter += 1;
// } while (counter < 5)

// for (let counter = 0; counter < 5; counter +=1) {
//     let userNumber = prompt('Enter number');
//     arr.push(Number(userNumber));
// }
// console.log('result', arr);

// let sum = 0;
// for(let i = 0; i < arr.length; i+=1) {
//     // sum = sum + arr[i];
//     sum += arr[i];
// }

// console.log(sum);

// for of
// break
// continue