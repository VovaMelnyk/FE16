// Види подій (click, submit, focus, input, keydown, keyup, change, DOMContentLoaded)
// addEventListener - template
// el.addEventListener('click', function(){}, bool)

let btn = document.querySelector('button');
// function greeting (name) {
//     alert(`Hello ${name}`);
// }
// function greeting() {
//     alert('Hello User');
//     btn.removeEventListener('click', greeting);
// }
// btn.addEventListener('click', greeting);
// btn.addEventListener('click', function() {
//     greeting('Bob');
// })
// removeListener
// event obj
// function showEvent(evt) {
//     console.log(evt.target.textContent);
// }
// btn.addEventListener('mouseover', showEvent);
// let burger = document.querySelector('.burger');
// let menu = document.querySelector('.list');

// function showMenu() {
//     menu.classList.toggle('show-menu');
// }

// burger.addEventListener('click', showMenu);
// preventDefault

// let form = document.querySelector('.form');
// let login = document.querySelector(`[name='login']`);
// let password = document.querySelector(`[name='password']`);

// function sendData(e) {
//     e.preventDefault();
//     let loginValue = login.value;
//     let passwordValue = password.value;
//     if (!loginValue || !passwordValue) {
//         alert('Form invalid');
//     } else {
//         let result = {
//             login: loginValue,
//             password: passwordValue
//         }
//         console.log(result);
//         form.reset();
//     }

// }
// form.addEventListener('submit', sendData);
// keybordEvent.key keyboardEvent.code
// function showKeyboarEvent(e) {
//     console.log(e);
// }
// window.addEventListener('keyup', showKeyboarEvent);

// Focus/blur, input,change, submit - (label animation example)
// DOMContentLoaded
// let body = document.querySelector('body');
// let overlay = document.createElement('div');
// let modal = document.createElement('div');
// let close = document.createElement('span');
// overlay.classList.add('overlay');
// modal.classList.add('modal');
// close.classList.add('close');
// close.textContent = 'x'
// modal.append(close);
// overlay.append(modal);
// function openModal() {
//     body.append(overlay);
// }
// function closeModal() {
//     overlay.classList.add('hide');
// }
// close.addEventListener('click', closeModal);
// window.addEventListener('DOMContentLoaded', openModal);
// // Event propagation (3 phases - capture target , bubbling)
// // bubbling example
// let child = document.querySelector('.child');
// let sub = document.querySelector('.sub');
// function showcConfirm (e) {
//     e.stopPropagation();
//     confirm('Child click');
// }

// function showAlert() {
//     alert('Sub click');
// }

// child.addEventListener('click', showcConfirm);
// sub.addEventListener('click', showAlert);
// e.target
// let gallery = document.querySelector('.gallery');
// function scale(evt) {
//     if(evt.target.classList.contains('gallery__item')) {
//         evt.target.classList.add('gallery__item--scale');
//     }
// }
// gallery.addEventListener('click', scale);
// e.stopPropogation
// event delegation

// pageXOffset
// pageYOffset

// elem.clientWidth elwidth
// elem.clientHeight elHeight


