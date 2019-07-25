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


// fetch('http://localhost:3000/favourite', {
//     method: "POST",
//     body: JSON.stringify({id: 1, img: "fsfsdfsd"}),
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

// fetch('http://localhost:3000/favourite/1', {
//     method: "PUT",
//     body: JSON.stringify({id: 1, img: "101010101"}),
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

// fetch('http://localhost:3000/favourite/1', {
//     method: "DELETE",
// })

const input = document.querySelector('.search__input');
const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');
const deleteBtn = document.querySelector('.delete');

function createGallery(obj) {
    const resultString = obj.hits.reduce((acc, el) => acc + `<div class="gallery__item">
      <img src=${el.webformatURL} alt= ${el.type}/>
      <div class="overlay">
        <img src="./favor.png"/>
      </div>
    </div>`,'');

    gallery.innerHTML = resultString;
}

function getImg(e) {
    e.preventDefault();
    e.stopPropagation();
    const value = input.value;
    const getUrl = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=9&image_type=photo`;
    form.reset();
    fetch(getUrl)
        .then(response => response.json())
        .then(data => createGallery(data))
        .catch(err => console.log(err))
}

function addToFavourite(e) {
    e.stopPropagation();
    if(e.target.nodeName === 'IMG') {
        const src = e.target.parentElement.previousElementSibling.src;
        const alt = e.target.parentElement.previousElementSibling.alt;
        const obj = {
            src,
            alt
        }

        fetch('http://localhost:3000/favourite', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}

function deleteImg() {
    fetch(`http://localhost:3000/favourite/2`, {
        method: 'Delete'
    })
}

function updateImg() {
    fetch('http://localhost:3000/favourite/5',{
        method: 'PUT',
        body: JSON.stringify({src: '#', alt: 'image'}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

form.addEventListener('submit', getImg);
gallery.addEventListener('click', addToFavourite);
deleteBtn.addEventListener('click', updateImg);

// C - create
// R - read
// U - update
// D - delete