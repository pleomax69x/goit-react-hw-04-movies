import axios from "axios";
import PropTypes from "prop-types";

const apiKey = "ae0cace2b608fa732224591b2c086b58";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTBjYWNlMmI2MDhmYTczMjIyNDU5MWIyYzA4NmI1OCIsInN1YiI6IjYwNWY0MWUzNDZmMzU0MDAzYzYwMGFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aEPds4AK-Hx3jqxvZQgj_Fr8147zi0HudymQuYc7amc";

const BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  api_key: apiKey,
  language: "en-US",
};

// const trending = () => {
//   return axios.get(
//     `${BASE_URL}/trending/all/day?api_key=${apiKey}`
//   );
// };

const trending = async () => {
  try {
    const config = { url: "/trending/all/day" };
    const data = await axios(config);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

// const searchMovie = (query) => {
//   return axios.get(
//     `${BASE_URL}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
//   );
// };

const searchMovie = async (query) => {
  try {
    const config = { url: "/search/movie", params: { query } };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

// const movieDetail = (id) => {
//   return axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
//   );
// };

const movieDetail = async (id) => {
  try {
    const config = { url: `/movie/${id}` };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

// const movieCredits = (id) => {
//   return axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
//   );
// };

const movieCredits = async (id) => {
  try {
    const config = { url: `/movie/${id}/credits` };
    const data = await axios(config, id);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

// const movieReviev = (id) => {
//   return axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`
//   );
// };

const movieReviev = async (id) => {
  try {
    const config = { url: `/movie/${id}/reviews` };
    const data = await axios(config);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
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
