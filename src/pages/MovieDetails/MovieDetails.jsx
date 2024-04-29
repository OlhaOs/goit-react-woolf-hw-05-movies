import { getMovieDetails } from 'api/ListMovies';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import picturenotFound from './notFound.jpg';
import { Notification } from 'components/Notification/Notification';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        <Notification message={error} />;
      }
    };
    getDetails();
  }, [movieId]);

  const { title, poster_path, overview, tagline, vote_average, genres } =
    movieInfo;

  return (
    <>
      <Link to="/" className={css.navLink}>
        Go back to main
      </Link>

      <section className={css.movieDetailSection}>
        {poster_path ? (
          <img
            className={css.movieDetailsImage}
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={tagline}
          />
        ) : (
          <img
            className={css.movieDetailsImage}
            src={`${picturenotFound}`}
            alt={tagline}
          />
        )}
        <div className={css.detailsContainer}>
          <h2 className={css.movieDetailsTitle}>{title}</h2>
          <p className={css.score}>User Score: {vote_average}</p>
          <p className={css.titleSmall}>Overview </p>
          <p className={css.overview}> {overview}</p>

          {genres && genres.length > 0 && (
            <div>
              <p className={css.titleSmall}>Genres</p>
              {genres.map((genre, index) => (
                <span key={index} className={css.genre}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className={css.infoSection}>
        <h3 className={css.infoAdditional}>Additional information</h3>
        <ul>
          <li className={css.itemList}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.itemList}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
