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
// let link = document.createElement('a');
// link.textContent = "Google";
// link.setAttribute('href', 'https://www.google.com/');
// link.setAttribute('target', '_blank');
// console.log(link.hasAttribute('target'));
// console.log(link.getAttribute('href'));
// console.log(link.href);
// link.title = 'Google title';
// // link.removeAttribute('target');
// console.log(link.attributes);
// link.classList.add('item', 'iten');
// link.classList.add('item--red');
// console.log(link);
// let list = document.querySelector('.list');
// let item1 = document.querySelector('#item1');
// item1.append(link);
// list.prepend(link);
// list.before(link);
// let cloneLink = link.cloneNode(true);
// console.log(cloneLink);
// list.after(link);
// list.before(cloneLink);
// Вставка на екран (append, prepend, after, before, replace, clone, remove) 
// innerHTML - create markup
// Fragment

// Create site 
// Select element
let root = document.querySelector('#root');
// Create elements
let header = document.createElement('header');
let heroContainer = document.createElement('div');
let mainTitle = document.createElement('h1');
let pictureContainer = document.createElement('div');
let pictureDiv = document.createElement('div');
let titleContainer = document.createElement('div');
let name = document.createElement('h1');
let creator = document.createElement('h3');

// Classes
heroContainer.classList.add('hero--container');
pictureContainer.classList.add('picture--container');
pictureDiv.classList.add('picture');
titleContainer.classList.add('title--container');



// Atributes


// textContent
mainTitle.textContent = `there's that line from newton about standing on the shoulders of giants. we're all standing on dennis' shoulders.`;
name.textContent = 'dennis ritchie';
creator.innerHTML = `founder of <span>c language</span> and <span>uNIX</span>`

// add to screen
root.append(header);
header.append(heroContainer);
heroContainer.append(mainTitle);
heroContainer.append(pictureContainer);
pictureContainer.append(pictureDiv);
header.append(titleContainer);
titleContainer.append(name);
titleContainer.append(creator);

function createHtml(tag, className, atrObj, contentType, content, container, method) {
    let el = document.createElement(tag);
    if (className) {
        el.classList.add(className);
    }
    if (typeof atrObj === 'object') {
        for (const key in atrObj) {
            el.setAttribute(key, atrObj[key]);
        }
    }
    if (contentType) {
        el.textContent = content;
    } else {
        el.innerHTML = content;
    }

    container[method](el);
    return el;
}

let divCreateWithFunc = createHtml('div', 'testClass', {
    id: 'testID'
}, false, '<span>Lorem Ipsum</span>', titleContainer, 'append');

let title = createHtml('h3', null, null, true, 'Title', divCreateWithFunc, 'prepend')