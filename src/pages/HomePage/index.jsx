import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log('error in catch', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className={css.container}>
      <h1 >Trending movies with week:</h1>
      {movies && <MoviesList movies={movies} />}
    </section>
  );
};
export default HomePage;
