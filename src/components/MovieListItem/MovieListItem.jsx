import css from './MovieListItem.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MovieListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li className={css.listItem}>
      <Link to={`/movie/${movie.id}`} state={{ from: location }}>
        {movie.original_title}
      </Link>
    </li>
  );
};
