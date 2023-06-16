// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryUl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

galleryUl.style.listStyle = 'none';

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join("");
}

galleryUl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});