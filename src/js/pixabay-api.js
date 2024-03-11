const apiKey = '42822558-20d699dce07778b8a952c17c9';

export function fetchImages(query) {
  const BASE_URL = `https://pixabay.com/api/`;
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        return Promise.reject('Failed to fetch images');
      }
      return res.json();
    })
    .then(images => images)
    .catch(error => {
      return Promise.reject('Failed to fetch images');
    });
}
