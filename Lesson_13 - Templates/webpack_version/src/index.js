// npm i handlebars
// npm i handlebars-loader -D
// add rule for hbs
// create folder for templates and create file
// import template
// run function

import listTemplate from './templates/list.hbs';
import galleryTemplate from './templates/gallery.hbs';
import { convertFromJSON, convertToJSON } from './localStorage';
import { frameworksArr } from './data/list';
import galleryItems from './data/gallery';
import { root } from './selector/selector';
import './styles.css';
// console.log(frameworksArr);
const markup = listTemplate(frameworksArr);
const galleryMarkup = galleryTemplate(galleryItems);
const finalMarkup = markup + galleryMarkup;
// root.innerHTML = markup;
// root.innerHTML += galleryMarkup;
root.innerHTML = finalMarkup;
// console.log(markup);
let str = convertToJSON(galleryItems);
localStorage.setItem('imgArr',str);
let result = JSON.parse(localStorage.getItem('imgArr'))
// localStorage.removeItem('imgArr');
console.log(result);
result.push({img: "https://placeimg.com/300/150/tech/sepia", text: "Tech"});
let string = JSON.stringify(result);
localStorage.setItem("imgArr",string);


// root.innerHTML = markup;

// console.log(markup);


// gallery 

// const markup = galleryTemplate(galleryItems);

// console.log(markup);

// root.innerHTML = markup;