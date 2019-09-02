// sync code
// async code
// setTimeout clearTimeout
// setInterval clearInterval
// timeout and interval delay
// event loop
// let arr = [];
// for (let i = 0; i < 10000000; i++) {
//     arr.push(i);
// };
// console.log(arr);
// const stop = document.querySelector('button');
// function sayHello() {
//     console.log('Hello');
// }

// const id = setTimeout(sayHello, 2000);
// console.log(id);
// console.log('Test');

// function greet() {
//     console.log("Hello");
// }

// const id = setInterval(greet, 1);

// function stopInterval() {
//     clearInterval(id);
// };
// stop.addEventListener('click', stopInterval)

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// date (new Date() getDate, getMonth, getFullYear, getDay, getTime, getHours, getMinutes, getSeconds, getMileseconds)

// const today = new Date(2020, 0, 1);
// console.log(today);
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getTime());

// timer

// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');

// const deadline = new Date(2020, 0, 1, 0, 0, 0);

// function timer() {
//     const today = new Date();

//     const delta = deadline - today;

//     const sec = Math.floor(delta / 1000) % 60;
//     const min = Math.floor(delta / 1000 / 60) % 60;
//     const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//     const day = Math.floor(delta / 1000 / 60 / 60 / 24);

//     secText.textContent = sec < 10 ? `0${sec}` : sec;
//     minText.textContent = min < 10 ? `0${min}` : min;
//     hoursText.textContent = hours < 10 ? `0${hours}` : hours;
//     daysText.textContent = day < 10 ? `0${day}` : day;
//     // console.log(day);
// }

// setInterval(timer, 1000);


// class Timer {
//     constructor(secClassName, minClassName, hoursClassName, daysClassName, deadline) {
//         this.secText = document.querySelector(secClassName);
//         this.minText = document.querySelector(minClassName);
//         this.hoursText = document.querySelector(hoursClassName);
//         this.daysText = document.querySelector(daysClassName);
//         this.deadline = new Date(deadline.year, deadline.month, deadline.date, deadline.hour, deadline.minute, deadline.sec)

//         this.logic = this.logic.bind(this);
//     }

//     logic() {
//         const today = new Date();
//         const delta = this.deadline - today;
//         const sec = Math.floor(delta / 1000) % 60;
//         const min = Math.floor(delta / 1000 / 60) % 60;
//         const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//         const day = Math.floor(delta / 1000 / 60 / 60 / 24);

//         this.secText.textContent = sec < 10 ? `0${sec}` : sec;
//         this.minText.textContent = min < 10 ? `0${min}` : min;
//         this.hoursText.textContent = hours < 10 ? `0${hours}` : hours;
//         this.daysText.textContent = day < 10 ? `0${day}` : day;
//     }

//     start() {
//         setInterval(this.logic, 1000);
//     }
// }

// const result = new Timer('.seconds', '.minutes', '.hours', '.days', {
//     year: 2020,
//     month: 0,
//     date: 1,
//     hour: 0,
//     minute: 0,
//     sec: 0
// });
// result.start();
// console.log(result);





























// const deadline = new Date(2019, 8, 29)
// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');
// function timer() {
//     const today = new Date();
//     let result = deadline - today;
//     let sec = Math.floor(result / 1000);
//     let min = Math.floor(sec / 60);
//     let hours = Math.floor(min / 60);
//     let days = Math.floor(hours / 24);
//     sec = sec % 60;
//     min = min % 60;
//     hours = hours % 24;
//     // days = days;

//     secText.textContent = sec < 10 ? `0${sec}`: sec;
//     minText.textContent = min < 10 ? `0${min}`: min;
//     hoursText.textContent = hours < 10 ? `0${hours}`: hours;
//     daysText.textContent = days < 10 ? `0${days}`: days;
// }

// setInterval(timer, 1000)