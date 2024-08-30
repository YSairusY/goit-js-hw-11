const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchValue => {
  const urlParams = new URLSearchParams({
    key: '45645042-c9b2fc3a6d24b970e9e620bb9',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};