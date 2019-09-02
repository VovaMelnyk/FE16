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

// function Phone({
//     size,
//     diagonal,
//     color,
//     ram,
//     status
// }) {
// this.size = size;
// this.diagonal = diagonal;
// this.color = color;
// this.ram = ram;
// this.status = status;
// }
// Phone.prototype.toggleStatus =  function () {
//     this.status = !this.status;
// }

// Phone.prototype.call = function () {
//     console.log(`Telephone calling`);
// }

// Phone.prototype.showInfo = function () {
//     console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
// }
// // console.log(Phone.prototype);
// let nokia3110 = new Phone({
//     size: '100*200',
//     diagonal: 3,
//     color: 'black',
//     ram: '32MB',
//     status: false
// });

// let sonyEricson = new Phone({
//     size: '120*180',
//     diagonal: 2.9,
//     color: 'blue',
//     ram: '40MB',
//     status: false
// })

// console.log(nokia3110);
// console.log(sonyEricson);
// nokia3110.toggleStatus();
// nokia3110.showInfo();
// sonyEricson.toggleStatus()
// sonyEricson.call();

// // Наслідовання і конструктори

// function SmartPhone ({
//     size,
//     diagonal,
//     color,
//     ram,
//     status,
//     camera,
//     wifi,
//     sensorScrean
// }) {
// this.size = size;
// this.diagonal = diagonal;
// this.color = color;
// this.ram = ram;
// this.status = status;
//     Phone.call(this,{size, status, diagonal, ram, color});
//     // Phone.apply(this,[{size, status, diagonal, ram, color}]);
//     this.camera = camera;
//     this.wifi = wifi;
//     this.sensorScrean = sensorScrean;
// }

// // SmartPhone.prototype = {constructor: fn}

// SmartPhone.prototype = Object.create(Phone.prototype);
// SmartPhone.prototype.constructor = SmartPhone;

// SmartPhone.prototype.takePhoto = function() {
//     console.log('Photo is done');
// }

// SmartPhone.prototype.takeVideo = function () {
//     console.log('Start filming');
// }

// SmartPhone.prototype.toggleWifi = function () {
//     this.wifi = !this.wifi;
// }

// SmartPhone.prototype.toggleScrean = function () {
//     this.sensorScrean = !this.sensorScrean;
// }

// let lg = new SmartPhone({
//     size: '200*300',
//     diagonal: 5,
//     color: 'black',
//     ram: '6GB',
//     status: false,
//     camera: '10MPX',
//     wifi: true,
//     sensorScrean: true,
// });

// console.log(lg);

// ES6 класи
// Створення класа
// Методи
// Наслідування в класах
class Phone {
    constructor({
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

    toggleStatus() {
        this.status = !this.status;
    }

    call() {
        console.log(`Telephone calling`);
    }

    showInfo() {
        console.log(`${this.size} ${this.color} ${this.diagonal} ${this.ram}`);
    }
}

let nokia3110 = new Phone({
    size: '100*200',
    diagonal: 3,
    color: 'black',
    ram: '32MB',
    status: false
});

// console.log(nokia3110);

class SmartPhone extends Phone {
    constructor({
        size,
        diagonal,
        color,
        ram,
        status,
        camera,
        wifi,
        sensorScrean,
        title
    }) {
        // this = {}
        super({
            size,
            diagonal,
            color,
            ram,
            status
        });
        this.camera = camera;
        this.wifi = wifi;
        this.sensorScrean = sensorScrean;
        this._title = title;
    }
// Гетери і сетери
    get title () {
        return this._title;
    }

    set title (value) {
        this._title = value;
    }

    // Статичні методи і властивості

    static calcCircle(r) {
        console.log(2 * Math.PI * Math.pow(r, 2));
    }

    takePhoto() {
        console.log('Photo is done');
    }

    takeVideo() {
        console.log('Start filming');
    }

    toggleWifi() {
        this.wifi = !this.wifi;
    }

    toggleScrean() {
        this.sensorScrean = !this.sensorScrean;
    }

    fastCall() {
        this.toggleScrean();
        this.call();
    }
}

// SmartPhone.calcCircle(5);

let lg = new SmartPhone({
    size: '200*300',
    diagonal: 5,
    color: 'black',
    ram: '6GB',
    status: false,
    camera: '10MPX',
    wifi: true,
    sensorScrean: false,
    title: 'Supet SmartPhone',
});

console.log(lg);
// lg.takePhoto();
// lg.fastCall();
console.log(lg.title);
lg.title = 'sfssfjslfsjfsdfjsdjlf';
console.log(lg.title);


