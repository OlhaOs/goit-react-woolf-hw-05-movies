import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import css from './HomePage.module.css';
import { Bars } from 'react-loader-spinner';

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
        console.log('error in catch', error);
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
        <Bars
          height="60"
          width="120"
          color="#727378"
          ariaLabel="bars-loading"
          wrapperClass={css.loader}
          visible={true}
        />
      ) : (
        movies && <MoviesList movies={movies} />
      )}
    </section>
  );
};
export default HomePage;
