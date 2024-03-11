import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';

const searchForm = document.querySelector('#search-form');
const inputEl = document.querySelector('#search-input');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = inputEl.value.trim();
  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: ' Please enter a search term',
    });
    return;
  }
  clearGallery();
  fetchImages(searchTerm)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images',
      });
    });
});
