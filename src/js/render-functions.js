import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const gallery = new simpleLightbox('.gallery a');

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function renderImages(images) {
  images.forEach(image => {
    const markup = `
            <a href="${image.largeImageURL}" data-lightbox="gallery-item">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
        `;
    galleryEl.insertAdjacentElement('beforeend', markup);
  });
  gallery.refresh();
}
