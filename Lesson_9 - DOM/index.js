// Dom 
// CSSOM
// DOM дерево 
// Навігація по DOM 
// parentNode, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
// let item3 = document.querySelector('#item3');
// let list = item3.parentNode;
// console.log(item3);
// console.log(item3.parentNode);
// console.log(item3.children);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(item3.previousElementSibling);
// console.log(item3.nextElementSibling);
// console.log(list.nextElementSibling);
// console.log(list.previousElementSibling);
// Пошук по DOM
// let btn = document.querySelector(".register");
// let itemArr = [...document.querySelectorAll(".item")];
// Array.from(document.querySelectorAll(".item"));
// let itemArr = document.querySelector('.item');
// console.log(itemArr);
// contains and closest
// атрибути елементів форми
// let picture = document.querySelector(".img");
// picture.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hedgehog-looking-royalty-free-image-822390428-1531431281.jpg';
// let inputText = document.querySelector('#name');
// console.log(inputText.value);
// let checkValue = document.querySelector('[type=checkbox]:checked');
// console.log(checkValue.value);

// let checkboxArr = [...document.querySelectorAll('[type=checkbox]:checked')]
//     .map(el => el.value);
// console.log(checkboxArr);

// textContent

// let title = document.querySelector('.title');
// title.textContent = 'Lorem ipsum';
// console.log(title);

// style 
//getComputedStyle()

// let image = document.querySelector('.img');
// console.log(getComputedStyle(image));

// classList (contains, add, remove, toggle, replace)
// Робота з  Атрибутами (hasAttribute, getAtr, setAtr, removeAtr, attributes)
// data-atr
// Створення елемента 
// Вставка на екран (append, prepend, after, before, replace, clone, remove) 
// innerHTML - create markup
// Fragment