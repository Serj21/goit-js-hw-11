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
    <div class="image-card">
        <a href="${image.largeImageURL}" data-lightbox="gallery-item" data-title="${image.tags}">
            <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="image-info">
            <p class="tags">${image.tags}</p>
            <p class="likes">Likes: ${image.likes}</p>
            <p class="views">Views: ${image.views}</p>
            <p class="comments">Comments: ${image.comments}</p>
            <p class="downloads">Downloads: ${image.downloads}</p>
        </div>
    </div>
`;
    galleryEl.insertAdjacentHTML('beforeend', markup);
  });
  gallery.refresh();
}
