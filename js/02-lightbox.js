import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryItems
  .map(
    (elem) => `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" title="${elem.description}" />
</a>`
  )
  .join("");

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
});
