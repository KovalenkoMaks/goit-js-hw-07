import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryItems
  .map(
    (elem) => `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="" title="${elem.description}" />
</a>`
  )
  .join("");
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
