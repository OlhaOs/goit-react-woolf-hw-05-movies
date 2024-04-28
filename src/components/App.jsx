import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import css from './App.module.css';
import { Movies } from 'pages/Movies';

import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <header>
        <Link to="/" className={css.navLink}>
          Home
        </Link>
        <Link to="/movies" className={css.navLink}>
          Movies
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
};
