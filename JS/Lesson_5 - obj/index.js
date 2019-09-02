// 1) Замикання
// function first () {
//     let discont = 0;
//     function second () {
//         discont+=1
//     }
//     function third () {
//         discont -= 1;
//     }
//     return second;
//     // if (discont <= 0) {
//     //     return second
//     // } else {
//     //     return third
//     // };
//     // return discont < 0 ? second : third; 
// }
// let user = first(); // 0
// let user2 = first(); // 0
// console.log(user);
// user();
// user();

// user2();
// user2();
// user2();
// user2();
// user2();

// console.log(user);

// 2)Створення обєкта 

// let mark = 'BMW';
// let model = 'X5';
// let color = 'red';
// let engineVolume = '8';
// let vin = 'DDF3534dDDFD';
// let isLux = false;
// let maxSpeed = 200;

// const BMW = {
//     mark: 'BMW',
//     model: 'X5',
//     color: 'red',
//     engineVolume: 8,
//     vin: 'DDF3534dDDFD',
//     isLux: false,
//     maxSpeed: 200,
//     price: '5000$',
//     interier: {
//         numberOfSeats: 5,
//         material: 'lethe',
//         ishaveChildSeat: true,
//     },
//     palitra: [{
//         type: 'metalic',
//         color: 'black'
//     }, {
//         type: 'mat',
//         color: 'white'
//     }, {
//         type: 'chrom',
//         color: 'green'
//     }],
//     year: 2010,
// }
// console.log(BMW);
// mark/model/year
// let obj = new Object()
// 3) Читання інфи з обєкта
// console.log(`${BMW.mark}/${BMW.model}/${BMW.year} color: ${BMW.palitra[2].color}/${BMW.interier.material}`);
// console.log(BMW.palitra[2].color);
//  console.log(BMW.year);
//  console.log(BMW['year']);
//  let key = 'vin';
//  console.log(BMW[key]);
//  function createObj (value1, value2) {
//      let nameToUppercase = value1.toUpperCase();
//      let lastnameToUppercase = value2.toUpperCase();
//      return {
//          name: nameToUppercase,
//          lastname: lastnameToUppercase,
//      }
//  }
//  const user1 = createObj('Homer', 'Simpson');
//  const user2 = createObj('Filip', 'Fry');
//  console.log(`${user1.name} ${user2.lastname}`);
// 3.1) Додавання ключів в обєкт
// let coffe = {
//     name: 'Americano',
//     price: 25,
//     size: 'big',
// };
// coffe.currency = 'UAH'; // coffe['currency'] = 'UAH';
// coffe.price = 40; // coffe['price'] = 40;
// // console.log(coffe);
// // 4) Видалення ключів
// delete coffe.size; // delete coffe['size'];
// console.log(coffe);
// 5) Коли ключ відсутній
// console.log(coffe.hasMilk);
// coffe.hasMilk = false;
// if(coffe.hasMilk) {
//     console.log('Hello');
// } else {
//     console.log('Error');
// }
// 6) Скорочений запис ключів
// let sell = 26.95;
// let buy = 26.50;
// // const USD = {
// //     sell : sell,
// //     buy: buy,
// // };
// const USD = {
//     sell,
//     buy,
// }
// 7)  Ключ що вираховується
// function createObjKey() {
//     const alph = 'qwertyuiopasdfghjklzxcvbnm';
//     let key = '';
//     for (let i = 0; i < 5; i += 1) {
//         let index = Math.floor(Math.random() * alph.length);
//         let letter = alph[index];
//         key += letter
//     }
//     return key;
// }
// let obj = {
//     name: 'user',
//     // [createObjKey()] : 25,
//     value: createObjKey(),
// }
// console.log(obj);
// 10)  for in
// let user = {
//     name: "User",
//     type: 'basic',
//     age: 12,
//     email: 'user@gmail.com',
//     password: 'sfsdfsdfsf',
// }
// for(let key in user) {
//     console.log(`${key} - ${user[key]}`);
// }
// let storagePrice = {
//     apple: 5,
//     orange: 10,
//     watermelon: 3,
//     banana: 20, 
// }

// let userOrder1 = {
//     apple: 1,
//     banana: 5,
//     orange: 1,
// }

// let userOrder2 = {
//     watermelon: 3,
//     banana: 1,
//     orange: 2,
// }

// function calculateOrderPrice (userOrder, storage) {
//     let sum = 0;
//     for (let key in userOrder) {
//         let total = userOrder[key] * storage[key];
//         sum+= total;
//     }
//     return sum;
// }
// console.log(calculateOrderPrice(userOrder1, storagePrice));
// console.log(calculateOrderPrice(userOrder2, storagePrice));
// 11) keys, values, entries
// let user = {
//     name: 'John',
//     lastname: 'Dou',
//     age: 35,
//     isPreniumUser: true,
//     email: 'johnDou@gmail.com',
//     password: '11241q'
// }
// let keysArr = Object.keys(user);
// console.log("TCL: keysArr", keysArr);
// let valuesArr = Object.values(user);
// console.log("TCL: valuesArr", valuesArr);
// let untriesArr = Object.entries(user);
// console.log("TCL: untriesArr", untriesArr)
// function objIsEmpty(obj) {
//     // if(Object.keys(obj).length) {
//     //     return false
//     // } else {
//     //     return true
//     // }
//     // return Object.keys(obj).length === 0 ? true : false;
//     // return Object.keys(obj).length ? false : true;
//     return Object.keys(obj).length === 0;
// }
// 8) Методи обєкта && 9)  this в обєктах  
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
//         if(this.canFire()) {
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

// let tank2 = {
//     life: 100,
//     armor: 200,
//     speed: 50,
//     amunition: 2,
//     isEngineBroken: false,
//     x: 0,
//     y: 0,
//     move: function (newX, newY) {
//         if (this.canTankMove()) {
//             this.x = newX;
//             this.y = newY;
//         }

//     },
//     fire() {
//         if(this.canFire()) {
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
// tank.move(40, 12);
// tank2.move(10,10)
// console.log(tank);
// console.log(tank2);

// 12)  spread array 
// let names = ['Homer', 'Bender'];
// let lastName = ['Simpson', 'Rodriges'];
// let result = [...lastName,...names];
// console.log(result);
// let frontEnd = ['JS', 'React', 'HTML', 'CSS']
// let fullStack = ['Node.JS', ...frontEnd];
// console.log(fullStack); 
// 13) spread obj
// let desc = {
//     title: 'Warior',
//     year: 2019,
//     time: 120
// }
// let trailer = {
//     id: 2,
//     url: 'youtube/trailer/warior&2019'
// }

// let similarMovies = {
//     id: 5,
//     count: 5,
//     filmList : [
//         {
//             title: 'Movie1',
//             year: 2010,
//             time: 90
//         },
//         {
//             title: 'Movie2',
//             year: 2010,
//             time: 100
//         },{
//             title: 'Movie2',
//             year: 2010,
//             time: 85
//         }
//     ]
// }

// let filmInfo = {
//     ...desc,
//     ...similarMovies,
//     ...trailer,
//     budget: '100000$',
//     time: 150,
// }
// console.log(filmInfo);
// 14) rest
// function sum(...numbers) {
//     let total = 0;
//     for (let el of numbers) {
//         total += el;
//     }
//     return total;
// }
// console.log(sum(5, 6, 7, 82, 41, 225));
// 15) деструктуризація обєктів
// let user = {
//     name: 'User',
//     budget: {
//         total: 5000,
//         dayLimit: 1500,
//     },
//     membership: {
//         status: 'basic',
//         email: 'user@gmai.com'
//     }
// }
// const name = user.name;
// const budget = user.budget;
// const membership = user.membership

// const total = user.budget.total;
// const status = user.membership.status;
// const {
//     name,
//     budget,
//     membership,
//     email
// } = user;
// console.log(name,budget,membership);
// const {
//     name,
//     budget :{total},
//     membership: {status},
//     email
// } = user;
// console.log(name,total,status);
// 16) Деструктуризація масивів
// let result = ['Hello', 500, {title: 'Chapter1', pageNumber: 1}];
// let title = result[0];
// let totaPage = result[1];
// let firstChapter = result[2];
// const [title, totalPage, firstChapter, number] = result
// console.log(title);
// console.log(totalPage);
// console.log(firstChapter);
// console.log(number);
// 17) Передача по силці і по значеню
// let a = 5;
// let b = a;
// console.log(a, b);
// a = 10;
// console.log(a , b);

// let user = {
//     name: 'Bob'
// };
// // let user2 = user;
// let user2 = {...user}
// user.name = 'Jack';
// console.log('user one',user);
// console.log('user two', user2);
