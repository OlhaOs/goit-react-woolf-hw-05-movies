import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import css from './HomePage.module.css';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        <Notification message={error} />;
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className={css.container}>
      <h1>Trending movies with week:</h1>

      {loading ? (
        <Loader />
      ) : (
        movies.length > 0 && <MoviesList movies={movies} />
      )}
    </section>
  );
};
export default HomePage;
