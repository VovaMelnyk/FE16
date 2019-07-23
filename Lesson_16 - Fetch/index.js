// const root = document.querySelector('#root');
// fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(data => createDom(data))
//     .catch(err => console.log(err))

// function createDom (user) {
//     const h1 = document.createElement('h1');
//     const email = document.createElement('p');
//     const avatar = document.createElement('img');
//     h1.textContent = `${user.results[0].name.first} ${user.results[0].name.last}`;
//     email.textContent = `${user.results[0].email}`;
//     avatar.src = user.results[0].picture.medium;
//     avatar.alt = user.results[0].name.first;
//     root.append(h1, email, avatar);
// }

// 1) Endpoint
// 2) resourse
// 3) parametrs

// const URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&category=backgrounds&per_page=12';

// fetch(URL)
//     .then(res => res.json())
//     .then(obj => createGallery(obj.hits))
//     .catch(err => console.log(err))

// function createGallery(imgArr) {
//     const result = imgArr.map(el => {
//         let img = document.createElement('img');
//         img.src = el.largeImageURL;
//         img.alt = el.tags;
//         return img;
//     });

//     root.append(...result);
// }