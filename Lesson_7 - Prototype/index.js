// Суть ООП 
// Клас
// Обєкт(екземпляр)
// Інтерфейс
// Інкапсуляція
// Абстракція
// Наслідування
// Поліморфізм
// Прототип обєкта
// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// let animal = {
//     canSleep: true,
//     canEat: true,
// }

// let dog = {
//     canBark: true,
//     canPlay: true,
//     __proto__ : {
//     canSleep: true,
//     canEat: true,
// }
// }

// Object.create() 
// hasOwnProperty
// proto  [[Protoype]]
// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canPlay = true;

// console.log(animal);
// console.log(dog);

// console.log(animal.canSleep);
// console.log(animal.canBark);
// console.log(dog.canBark);
// console.log(dog.canEat);
// __proto__ === [[Prototype]]
// Function.prototype
function Phone({
    size,
    diagonal,
    color,
    ram,
    status
}) {
    this.size = size;
    this.diagonal = diagonal;
    this.color = color;
    this.ram = ram;
    this.status = status;
}
Phone.prototype.toggleStatus =  function () {
    this.status = !this.status;
}

Phone.prototype.call = function () {
    console.log(`Telephone calling`);
}

Phone.prototype.showInfo = function () {
    console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
}
// console.log(Phone.prototype);
let nokia3110 = new Phone({
    size: '100*200',
    diagonal: 3,
    color: 'black',
    ram: '32MB',
    status: false
});

let sonyEricson = new Phone({
    size: '120*180',
    diagonal: 2.9,
    color: 'blue',
    ram: '40MB',
    status: false
})

console.log(nokia3110);
console.log(sonyEricson);
nokia3110.toggleStatus();
nokia3110.showInfo();
sonyEricson.toggleStatus()
sonyEricson.call();

// Наслідовання і конструктори

// ES6 класи

// Створення класа

// Методи

// Наслідовання в класах

// Статичні методи і властивості

// Гетери і сетери
