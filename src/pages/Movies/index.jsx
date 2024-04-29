import { getSearchMovies } from 'api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { Notification } from 'components/Notification/Notification';
import { Bars } from 'react-loader-spinner';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(false);

  const query = searchParams.get('query') ?? '';

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setIsMovieFound(false);
    try {
      const data = await getSearchMovies(query);
      setMovies(data);
      if (data.length === 0) {
        setIsMovieFound(true);
      }
    } catch (error) {
      <Notification message={error} />;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <Bars
          height="60"
          width="120"
          color="#727378"
          ariaLabel="bars-loading"
          wrapperClass={css.loader}
          visible={true}
        />
      ) : movies && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        isMovieFound && <Notification message={'Sorry, no match found'} /> // Відображати Notification лише якщо showNotification === true
      )}
    </>
  );
};
export default Movies;
