import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

function createMarkupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
	`
    )
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", createMarkupGallery(galleryItems));

galleryEl.addEventListener("click", onImageClick);

function onImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
instance.show()
galleryEl.addEventListener('keydown',(e)=>{
	if(e.code ==="Escape"){
		instance.close();
	}
} )
}

