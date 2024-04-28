import instance from 'api/api';

const API_KEY = `53f91c80aac0fdf8257fab8d211f13b5`;

export const getTrendingMovies = async () => {
  const { data } = await instance(`/trending/movie/day?api_key=${API_KEY}`);
  console.log('data', data.results);
  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await instance(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  console.log('data in search', data);
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance(`/movie/${id}?api_key=${API_KEY}`);
  console.log('data in details', data);
  return data;
};
