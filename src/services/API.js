import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '10e9185665d086f70239d7bfb45d8306';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?`
  );
  return response.data;
};

export const getMovieByName = async movieName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${movieName}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews`
  );
  return response.data;
};