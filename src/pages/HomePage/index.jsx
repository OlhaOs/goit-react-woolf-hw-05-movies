import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
        console.log('data in try', data);
      } catch (error) {
        console.log('error in catch', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending movies with week:</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
