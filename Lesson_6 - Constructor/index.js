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
// call, apply, bind
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

// let bindedFunction = getHotelInfo.bind(resortHotel)

// bindedFunction()
// getHotelInfo.call(resortHotel, 'Homer', 'Simpson');
// getHotelInfo.call(fourSeason, 'Homer', 'Simpson');
// getHotelInfo.call(sevenDays, 'Homer', 'Simpson');
// let functionArguments = ['Homer', 'Simpson'];
// getHotelInfo.apply(resortHotel,['Homer', 'Simpson']);
// getHotelInfo.apply(fourSeason,['Homer', 'Simpson']);
// getHotelInfo.apply(sevenDays,functionArguments);
// Конструктори 
//[[Call]] [[Construct]]
// function Message(author, text, date) {
//     // this = {}
//     this.author = author;
//     this.text = text;
//     this.date = date;
//     this.editMessage = function(editText) {
//         this.text = editText;
//     }
//     // return this
// }
// let message = new Message('Bob', 'Lorem Ipsum', '23.05.19');
// let message2 = new Message('John', 'test message', '12.05.18');
// message.editMessage('Edit text');
// message2.editMessage('Hello world');
// console.log(message);
// console.log(message2);
// Створення конструктора  і написання шаблона обєкта
// function Tank({
//     armor,
//     speed,
//     x,
//     amunition,
//     y
// }) {
//     this.life = 100;
//     this.armor = armor;
//     this.speed = speed;
//     this.amunition = amunition;
//     this.isEngineBroken = false;
//     this.x = x;
//     this.y = y;
//     this.move = function (newX, newY) {
//         if (this.canTankMove()) {
//             this.x = newX;
//             this.y = newY;
//         }
//     };
//     this.canTankMove = function () {
//         return !this.isEngineBroken
//     };

//     this.canFire = function () {
//         return this.amunition > 0;
//     };

//     this.fire = function () {
//         if (this.canFire()) {
//             this.amunition -= 1;
//         } else {
//             prompt('Enter your credit card number');
//         }
//     };

//     this.hit = function (damage) {
//         this.life -= damage;
//     }
// }


// let tiger = new Tank(100, 70, 10, 12, 30);
// tiger.move(25, 12);
// tiger.fire();
// tiger.fire();
// tiger.hit(25);
// tiger.isEngineBroken = true;
// tiger.move(50, 58);
// // tiger.amunition = 0;
// tiger.fire();
// console.log(tiger);

// let objOfArguments = {x: 10, y: 15, speed: 12, armor: 150, amunition: 6}

// const {amunition, armor, speed, x,y} = objOfArguments;
// let obj = {
//     x: 10,
//     y: 15,
//     speed: 12,
//     armor: 150,
//     amunition: 6
// }
// let scorpion = new Tank(obj);
// console.log(scorpion);

// let tank = {
//     life: 100,
//     armor: 200,
//     speed: 50,
//     amunition: 2,
//     isEngineBroken: false,
//     x: 50,
//     y: 60,
//     move: function (newX, newY) {
//         if (this.canTankMove()) {
//             this.x = newX;
//             this.y = newY;
//         }

//     },
//     fire() {
//         if (this.canFire()) {
//             this.amunition -= 1;
//         } else {
//             prompt('Enter your credit card number');
//         }

//     },
//     canTankMove() {
//         return !this.isEngineBroken
//     },
//     canFire() {
//         return this.amunition > 0
//     }
// }
// Додавання методів















