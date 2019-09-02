// let header = document.querySelector('.header');
// let nav = document.querySelector('.nav');
// let headerH = header.clientHeight;
// function toggleMenu () {
//     if (pageYOffset > headerH) {
//         nav.classList.add('fixed-nav');
//     } else {
//         nav.classList.remove('fixed-nav');        
//     }
// }
// window.addEventListener('scroll',toggleMenu);

// 1) Визначити скільки ми вже проскролили (pageYOffset)
// 2) Знайти висоту хедера (el.clientHeight)
// 3) порівняння скрола і висоти хедера (if)
// 4) Навішати подію (addEventListener - 'scroll' window)

let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let headerH = header.clientHeight;
console.log(headerH);

function scrollEvent() {
    // console.log(pageYOffset);
    if(pageYOffset > headerH) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', scrollEvent);