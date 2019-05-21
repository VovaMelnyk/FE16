// Контекст виконання
// let user = {
//     name: 'Bob',
//     lastName: 'Dou',
//     getFullInfo() {
//         console.log(this);
//         // console.log(`${this.name}/${this.lastName}`);
//     },
//     showArrowThisInObj: () => {
//         console.log(this);
//     },

//     nestedArrowFunction() {
//         console.log('regular function',this); // user
//         const arrowFunc = () => {
//             console.log('this in nested arrow function', this);
//         }
//         arrowFunc();
//     }
// }
// user.nestedArrowFunction();
// user.getFullInfo();
// user.showArrowThisInObj();
// Правила визначення контексту  (Глобально , в обєкті, стрілки) // Стрілки в обєкті
// 'use strict'
// function showThis() {
//     console.log(this);
// } // window // undefind
// const showThis = () => {
//     console.log(this);
// }
// showThis();

// let resortHotel = {
//     name: 'Resort Hotel',
//     price: 700,
//     status: 'Lux'
// }

// let sevenDays = {
//     name : '7 Days',
//     price: 300,
//     status: 'Regular'
// }

// let fourSeason = {
//     name: '4 Seasons',
//     price: 100,
//     status: 'Econom'
// }

// function getHotelInfo (name, lastName) {
//     console.log(`Hello ${name} ${lastName} you in ${this.name}, ${this.price}, ${this.status}`);
// }

// getHotelInfo.call(resortHotel, 'Homer', 'Simpson');
// getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
// getHotelInfo.call(sevenDays, 'Homer', 'Simpson');
// let functionArguments = ['Homer', 'Simpson'];
// getHotelInfo.apply(resortHotel,['Homer', 'Simpson']);
// getHotelInfo.apply(fourSeason,['Homer', 'Simpson']);
// getHotelInfo.apply(sevenDays,functionArguments);

// call, apply, bind
// Конструктори 
//[[Call]] [[Construct]]
// Створення конструктора  і написання шаблона обєкта
// Додавання методів