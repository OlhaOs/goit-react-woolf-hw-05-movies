import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};
