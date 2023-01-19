import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryItems
  .map(
    (element) => `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
  )
  .join("");
galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
    {
      onShow: () => {
        // console.log("onClose");
        document.addEventListener("keydown", close);
      },
      onClose: () => {
        document.removeEventListener("keydown", close);
      },
    }
  );
  instance.show();
  function close(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
});
