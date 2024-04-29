import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './App.module.css';

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading!!!!</h1>}>
        <header className={css.container}>
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
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </Suspense>
    </>
  );
};
