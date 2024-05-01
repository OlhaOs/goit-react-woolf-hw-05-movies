import instance from 'api/api';

const API_KEY = `53f91c80aac0fdf8257fab8d211f13b5`;

export const getTrendingMovies = async () => {
  const { data } = await instance(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await instance(`/search/movie?${query}&api_key=${API_KEY}`);
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};
export const getMovieCast = async id => {
  const { data } = await instance(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data.cast;
};
export const getMovieReview = async id => {
  const { data } = await instance(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};
