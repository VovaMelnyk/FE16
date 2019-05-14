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
// 4) Видалення ключів 
// 5) Коли ключ відсутній
// 6) Скорочений запис ключів
// 7)  Ключ що вираховується 
// 10)  for in
// 11) keys, values, entries
// 8) Методи обєкта 
// 9)  this в обєктах 
// 12)  spread array 
// 13) spread obj
// 14) rest
// 15)  деструктуризація обєктів
// 16) Деструктуризація масивів
// 17) Передача по силці і по значеню