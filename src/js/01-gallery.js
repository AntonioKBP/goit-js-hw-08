import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryMainDiv = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryMainDiv.insertAdjacentHTML('beforeend', galleryMarkup);
galleryMainDiv.addEventListener('click', onPictureClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

function onPictureClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') return;
  console.log(event);
}

var lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
