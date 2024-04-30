import { getSearchMovies } from 'api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
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
      <SearchForm
        handleSubmit={handleSubmit}
        query={query}
        setSearchParams={setSearchParams}
      />
      {loading ? (
        <Loader />
      ) :  movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        isMovieFound && <Notification message={'Sorry, no match found'} />
      )}
    </>
  );
};
export default Movies;
