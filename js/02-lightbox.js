import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCintainer = document.querySelector(".gallery");
const galleryElement = createGalleryElement(galleryItems);

function createGalleryElement(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class = "gallery__item">
            <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" 
                />
            </a>
        </li>`
        })
    .join("");
};

// console.log(galleryMarkup);

galleryCintainer.insertAdjacentHTML(`beforeend`, galleryElement);

const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250,});