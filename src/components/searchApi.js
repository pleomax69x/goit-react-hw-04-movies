import axios from "axios";
import PropTypes from "prop-types";

const apiKey = "ae0cace2b608fa732224591b2c086b58";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTBjYWNlMmI2MDhmYTczMjIyNDU5MWIyYzA4NmI1OCIsInN1YiI6IjYwNWY0MWUzNDZmMzU0MDAzYzYwMGFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aEPds4AK-Hx3jqxvZQgj_Fr8147zi0HudymQuYc7amc";

const trending = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
  );
};

const searchMovie = (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const movieDetail = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
};

const movieCredits = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );
};

const movieReviev = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`
  );
};

const search = {
  trending,
  searchMovie,
  movieDetail,
  movieCredits,
  movieReviev,
};
search.propTypes = {
  query: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

// export default { trending, movieDetail };
export default search;
