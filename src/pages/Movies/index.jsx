import { getSearchMovies } from 'api/ListMovies';
import { MoviesList } from 'components/MoviesList/Movieslist';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await getSearchMovies(query);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
