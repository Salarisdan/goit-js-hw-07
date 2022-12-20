import { galleryItems } from './gallery-items.js'

console.log(galleryItems)
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

function createGalleryMarkup(galleryItems) {
	return galleryItems.map(({preview, original, description }) =>
	`<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img
	class="gallery__image"
	src="${preview}"
	data-source="${original}"
	alt="${description}"
	/>
	</a>
	</div>`).join('');
}

function onGalleryClick(evt) {

}

function showModalOriginalImage(source) {
}

function galleryImg() {
	const gallery = document.querySelector('.gallery');

	if (!gallery) {
		console.log('Error: invalid markup!');
		return;
	}

	gallery.innerHTML = createGalleryMarkup(galleryItems);
}

gallery.append(...items)

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
 
	})

	galleryImg();

