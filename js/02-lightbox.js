import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
console.log(createGalleryCardsMarkup(galleryItems));
function createGalleryCardsMarkup(galleryItems)  {
    return galleryItems.map(({ preview, original, description }) => {
       return `
       <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
  }
