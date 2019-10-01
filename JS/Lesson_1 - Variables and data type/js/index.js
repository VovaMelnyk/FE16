"use strict";
// JS чутливий до регістру
// var year = 2018;
// let month = "November";
// const date = 27;
// let number = 10;
// let numBer = 50;
// let number = 100;

// let peoplename = 'Bob';
// let peopleName = 'Bob';
// const UAH_GRN = 8;

//  ;jadf;dfjd
/*
skdf;sdkfsdfksdk;flskd
lsjdflsdjflsdjflsdjflj
dfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
sdfsdfsdfsdfsdfsd
*/

// let word = 'JS';
// let number = 20;
// let bool = true;
// let n = null;
// let a = undefined;

// let id = Symbol(5);

// let name = 'Late';
// let price = 40;
// let currency = 'UAH';
// let sort = 'Arabica';
// let hasMilk = true;

// let late = {
//     name: 'Late',
//     price: 40,
//     currency: 'UAH',
//     sort: 'Arabica',
//     hasMilk: true,
// };
// let lateExtra = {
//     name: 'Late',
//     price: 50,
//     currency: 'UAH',
//     sort: 'Rabusta',
//     hasMilk: false,
// }

// typeof
// let w = 'JS';
// let num = 5;
// let b = true;
// let un = undefined;
// let empty = null;
// console.log(typeof w);
// console.log(typeof num);
// console.log(typeof b);
// console.log(typeof un);
// console.log(typeof empty);
// console.log(typeof coffe);

// let answer = prompt('Enter your name');
// console.log(answer);
// let answer2 = confirm('Are you happy?');
// console.log(answer2);

// Create variables
// console.log(x);
// var x = 5;
// let y = 10;
// console.log(y);
// const z = 50;
// console.log(z);

// const

// var x = 5;
// x = 20;
// console.log(x);
// let y = 10;
// y = 30;
// console.log(y);
// const z = 50;
// z = 60;
// console.log(z);

// duplicate declared
// var x = 5;
// var x = 10;
// console.log(x);

// let y = 20;
// let y = 30;
// console.log(y); // Error

// const z = 50;
// const z = 60;
// console.log(z); // Error

// if(true) {
//     var a = 10;
//     console.log(a);
// }

// console.log(a);

// Hoisting

// console.log(x); // undefined
// var x;
// x = 5;
// var x = 5;

// console.log(y); // is not defined
// let y = 10;
// console.log('Hello');

// console.log(z); // is not defined
// const z = 50;

// +
//
// let a = 5;
// a = a + 1;
// a += 2;
// a = a + 2;
// console.log(a++);
// console.log(a);
// console.log(++a);

// let a = 5;
// let b = 10;
// let result = a + b;
// console.log(result);
// console.log(typeof result);

// let a = 6;
// let b = 10;
// let c = '12';
// let d = 1;
// let result = d + b + c + a;
// console.log(result);
// console.log(typeof result);

// let a = 'Join ';
// let b = 'us';
// console.log(a + b);
// console.log(typeof a + b)

// let a = 3;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = 12;
// console.log(a + b);

// let a = true;
// let b = true;
// console.log(a + b);

// let a = true;
// let b = 'false';
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b);

// let a = undefined;
// let b = 10;
// console.log(a + b);

// let a = undefined;
// let b = false;
// console.log(a + b);
// console.log(typeof NaN);

// -

// let a = 10;
// let b = 5;
// console.log(b - a);

// let a = 'join us';
// let b = 'us';
// let result = a - b;
// console.log(result);
// console.log(typeof result);

// let a = 10;
// let b = '2';
// let c = 5;
// console.log(a + b - c);

// let a = 10;
// let b = 'true';
// console.log(a - b);

// *

// let a = 10;
// let b = 5;
// console.log(a * b);

// let a = 2;
// let b = 'start';
// console.log(a * b);

// let a = 2;
// let b = '2.2';
// console.log(a * b);

// let a = 10;
// let b = undefined;
// console.log(a * b);

// let a = 10;
// let b = Infinity;
// console.log(a / 0);

//  %
// let a = 10;
// let b = 3;
// console.log(a % b);

// console.log('object');
// alert('Hello');

// let answer = prompt('How old are you');
// console.log(answer);

// let answer = confirm('Are you ready?');
// console.log(answer);

// let num1 = prompt('Enter number');
// let num2 = prompt('Enter number');
// let num3 = prompt('Enter number');
// console.log(Number(num3));
// console.log(Number(num1) + Number(num2) + Number(num3));

// let a = '2rem';
// let b = '150px';
// let c = '2.5vw';
// let d = 'qweqw25';

// console.log(parseInt(a));
// console.log(parseInt(b));
// console.log(parseFloat(c));

// let a = 0.1;
// let b = 0.2;
// let result = a + b
// console.log(result.toFixed(2));

// let a = 'Hello';
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.includes('he'));
// console.log(a.indexOf('e'));
// console.log(a.indexOf('ll'));

// let name = 'Homer';
// let lastName = 'Simpson';
// let town = 'Springfield';

// console.log(name + lastName + 'lives' + 'in' + town);
// console.log(`${name} ${lastName} lives in ${town}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==============

"use strict";

/* task01
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре,
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// const name = "Генератор защитного поля";
// let price = 1000;
// price = 2000;
// const message = `Выбран ${name} цена за штуку ${price} кредитов`;
// console.log(message);

// ________________________________________________________________________________________________________________________________________________

/* task02
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;
// const date = `${day}/${month}/${year}`;
// const message = `Доброе утро, сегодня ${date}, за бортом отличная погода!`;
// // console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"

// __________________________________________________________________________________________________________________________________________________

/* task03
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = "Mango";
// const date = "14/08/2137";
// const roomType = "люкс";
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

// __________________________________________________________________________________________________________________________________________________

/* task04
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/

// const userInput = prompt("Введите пароль доступа");
// const correctPassword = "jqueryismyjam";
// if (userInput === correctPassword) {
//   alert("Доступ в секретный бункер разрешен!");
// } else if (!userInput) {
//   alert("Была нажата отмена!");
// } else {
//   alert("Неверный пароль, активирована система защиты!");
// }

// ___________________________________________________________________________________________________________________________________________________

/* task05?
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;
// let goods = prompt("Проверка количества товара на складе");

// if (goods > total) {
//   console.log("На складе недостаточно твоаров!");
// } else if (goods === total) {
//   console.log("Вы забираете весь товар cо склада!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// __________________________________________________________________________________________________________________________________________________

/*task06
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// const userInput = prompt("Введите произвольное целое число");
// const number = Number(userInput);

// if (!userInput) {
//   alert("Ну и ладно, пока!");
// } else if (Number.isInteger(number)) {
//   alert("Спасибо!");
// } else {
//   alert("Необходимо было ввести целое число!");
// }

// ___________________________________________________________________________________________________________________________________________________

/* task07
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// // let type;
// // if (value % 2 === 0) {
// //   console.log("even");
// //   type = "even";
// // } else {
// //   console.log("odd");
// //   type = "odd";
// // }

// let type = value % 2 === 0 ? "even" : "odd";
// console.log(`${value} is ${type}`);

// __________________________________________________________________________________________________________________________________________________
/* task08
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// let userInput = prompt(
//   "Введите число от 1 до 5, соответствено отелю который вы хотите"
// );

// if (!userInput) {
//   alert("Очень жаль, приходите еще!");
// } else {
//   userInput = Number(userInput);
//   switch (userInput) {
//     case 1:
//       alert("Каталог хостелов");
//       break;
//     case 2:
//       alert("Каталог бюджетных отелей");
//       break;
//     case 3:
//       alert("Каталог отелей ***");
//       break;
//     case 4:
//       alert("Каталог отелей ****");
//       break;
//     case 5:
//       alert("Каталог лучших отелей");
//       break;
//   }
// }

"use strict";
// Задача 1
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = "m4ng0h4ckz";
// let message = prompt("Введите пароль");

// if (!message) {
//   alert("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
// } else {
//   alert("Доступ запрещен, неверный пароль!");
// }

// Задача 2
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let balance;
// let message = prompt("Какое количество дроидов вы хотите купить?");
// totalPrice = message * pricePerDroid;
// balance = credits - totalPrice;
// if (!message) {
//   console.log("Отменено пользователем!");
// } else if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   console.log(
//     `Вы купили ${message} дроидов, на счету осталось ${balance} кредитов.`
//   )
// }

// 1. Получити данні від юзера -  promt
// 2. Знайти загальну ціну - множу
// 3. Знайти баланс - віднімаю
// 4. перевірка (відміна) if
// 5. паревірка (мало бабла) else if
// 6. перевірка (гроші є) else

// Задача 3
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch

// let country = prompt("Куда отправить товар?").toLowerCase();

// if (country) {
//   switch (country) {
//     case "китай":
//       console.log(`Доставка в ${country} будет стоить 100 кредитов`);
//       break;
//     case "южная америка":
//       console.log(`Доставка в ${country} будет стоить 250 кредитов`);
//       break;
//     case "австралия":
//       console.log(`Доставка в ${country} будет стоить 170 кредитов`);
//       break;
//     case "индия":
//       console.log(`Доставка в ${country} будет стоить 80 кредитов`);
//       break;
//     case "ямайка":
//       console.log(`Доставка в ${country} будет стоить 120 кредитов`);
//       break;
//     default:
//       console.log("В вашей стране доставка не доступна");
//   }
// }
