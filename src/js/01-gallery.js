
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const myGalleryUl = document.querySelector('.gallery');

// зарендорил разметку на фото
const allA = galleryItems.map(({preview, original, description}) => {
  // создаем елемент (li) c картинкой
const photoEl = `
<a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    title="${description}"
    />
</a>
`;
    return photoEl;
});

const stGallery = allA.join('');
// добавления наших li
myGalleryUl.innerHTML = stGallery;

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,
});