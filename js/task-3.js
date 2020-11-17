const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

/* Вариант 1. */
/* const body = document.querySelector('body');
const ulRef = document.createElement('ul');
ulRef.classList.add('container');

function getGalleryItemMarkup ({url, alt}) {
    return `<li class="image-size"><img scr="${url}" alt="${alt}"></li>`;
};

function getGalleryMarkup(arr) {
    const ulRef = `
    <ul>
    ${arr.map(item => getGalleryItemMarkup(item)).join('')}
    </ul>
    `;
    return ulRef;
}

body.insertAdjacentHTML('afterbegin', getGalleryMarkup(images));
 */

/* Вариант 2. */
/* const ulRef = document.createElement ('ul');
ulRef.setAttribute('id', 'gallery');
ulRef.classList.add('container');

const listItem1 = document.createElement('li');
listItem1.innerHTML = '<img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat"></img>';
listItem1.classList.add('imageSizes');

const listItem2 = document.createElement('li');
listItem2.innerHTML = '<img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish"></img>';
listItem2.classList.add('imageSizes');


const listItem3 = document.createElement('li');
listItem3.innerHTML = '<img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running"></img>';
listItem3.classList.add('imageSizes');

const picturesSet = [listItem1, listItem2, listItem3];

ulRef.append(...picturesSet);
console.log(ulRef); */

/* Вариант 3.
 */
/* const madeGallery = document.querySelector('#gallery');
madeGallery.classList.add('container');

images.forEach(element => {
  console.log(element)
const list = document.createElement('li');
const imageRef = document.createElement('img');
imageRef.setAttribute('src', '_______');
imageRef.setAttribute('alt', '_______');
imageRef.insertAdjacentHTML('afterbegin', element)
madeGallery.append(list);
list.append(imageRef);
}); */

/* Вариант 4. */
const madeGallery = document.querySelector('#gallery');
madeGallery.classList.add('container');

madeGallery.insertAdjacentHTML('afterbegin', images.map(({url, alt}) => 
`<li><img width="500" src='${url}' alt='${alt}'></li>`).join(''));
madeGallery.classList.add('container');
