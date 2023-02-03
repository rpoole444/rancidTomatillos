const fetchApiUrl = (path) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
    .then((response) => response.json())
};

const fetchAllData = () => {
  return Promise.all([
    fetchApiUrl("movies"),
    fetchApiUrl("movies/436270")]);
};

export { fetchAllData }