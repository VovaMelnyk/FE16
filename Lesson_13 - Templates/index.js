// Plagin, lib, framework
// Templating
// Process scheme
// Syntax {{}}
// Algoritm
// 0 Add lib
// 1 Create temp and give id
// 2 Get inner HTML from temp
// 3 Render template
// Add to webpack

// 1) Create template;
// 2) Crate or get access to obj;
// 3) template to js
// 4) Handlebars.compile
// 5) Create markup
// 6) Paste markup to html



// // simple
// const data = {
//     name: "User",
//     position: "FE Developer",
//     language: "Javascript"
// }

// let root = document.querySelector('#root');
// let template = document.querySelector('#simpleTemplate').innerHTML.trim();
// console.log('template',template);
// let templateScript = Handlebars.compile(template);
// let markup = templateScript(data);
// console.log('markup',markup);
// root.innerHTML = markup;

// helpers each and if

// const data = {
//     frameworks: ["React", "Vue", "Angular"],
//     libs: ["moment", "lodash", "axios", "propTypes"]
// }

// const root = document.querySelector('#root');
// const template = document.querySelector('#eachTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(data);
// // console.log(markup);
// root.innerHTML = markup;

// const frameworks =  ["React", "Vue", "Angular"];

// const root = document.querySelector('#root');
// const template = document.querySelector('#arrayTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(frameworks);
// root.innerHTML = markup;

// const data = {
//     domestic : false,
//     domestic_address: "Ukraine, Kyiv",
//     international_address: "USA, New-York",
//     user: {
//         name: "James"
//     },
//     title: "Your order arrived"
// }

// const root = document.querySelector('#root');
// const template = document.querySelector('#ifTemplate').innerHTML.trim();
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(data);
// root.innerHTML = markup;





// const data = [];

// for (let i = 0; i < 12; i++) {
//     data.push(faker.helpers.userCard())
// }
//   console.log(data);

//   const root = document.querySelector('#root');
//   const template = document.querySelector('#cards').innerHTML.trim();
//   const templateScript = Handlebars.compile(template);
//   const markup = templateScript(data);
//   root.innerHTML = markup;

const galleryItems = [
    { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
    { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
    { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
    { img: 'https://placeimg.com/300/150/people', text: 'people' },
    { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
    { img: 'https://placeimg.com/300/150/any', text: 'random' }
];

  const root = document.querySelector('#root');
  const template = document.querySelector('#gallery').innerHTML.trim();
  const templateScript = Handlebars.compile(template);
  const markup = templateScript(galleryItems);
  root.innerHTML = markup;


