// Templating
// Process scheme
// Syntax {{}}
// Algoritm
// 0 Add lib
// 1 Create temp and give id
// 2 Get inner HTML from temp
// 3 Render template
// Add to webpack


// // simple
// const data = {
//     name: "User",
//     position: "FE Developer",
//     language: "Javascript"
// }
// // get innerHTML data;
// const template = document.querySelector('#firstT').innerHTML.trim();
// const root = document.querySelector('#root');
// // console.log(template);

// // run compile function
// const templateScript = Handlebars.compile(template);

// // render data
// const markup = templateScript(data);
// // console.log(markup);
// root.innerHTML = markup

// helpers each and if

// const data = {
//     frameworks: ["React", "Vue", "Angular"]
// }

// const frameworks =  ["React", "Vue", "Angular"]

// const root = document.querySelector('#root');
// const template = document.querySelector("#secondT").innerHTML.trim()
// // console.log(template);
// const templateScript = Handlebars.compile(template);
// // const markup = templateScript(data);
// const markup = templateScript(frameworks)
// root.innerHTML = markup;

// const data = {
//     domestic : true,
//     domestic_address: "Ukraine, Kyiv",
//     international_address: "USA, New-York",
//     user: {
//         name: "James"
//     },
//     title: "Your order arrived"
// }

// const root = document.querySelector('#root');
// const template = document.querySelector('#thirdT').innerHTML.trim();
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