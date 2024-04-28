import css from './MovieListItem.module.css';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ movie }) => {
  return (
    <li className={css.listItem}>
      <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
    </li>
  );
};
