// import { galleryItems } from "./gallery-items.js";

// const galleryEl = document.querySelector(".gallery");
// galleryEl.innerHTML = galleryItems
//   .map(
//     (elem) => `<a class="gallery__item" href="${elem.original}">
//   <img class="gallery__image" src="${elem.preview}" alt="" title="${elem.description}" />
// </a>`
//   )
//   .join("");
// const lightbox = new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
//   // scrollZoomFactor: 0.01,
//   // scrollZoom: false,
// });
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
