import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.container}>
        <Link to="/" className={css.navLink}>
          Home
        </Link>
        <Link to="movies" className={css.navLink}>
          Movies
        </Link>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
