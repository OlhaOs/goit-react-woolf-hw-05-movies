import { getMovieDetails } from 'api/ListMovies';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
      }
    };
    getDetails();
  }, [movieId]);

  const { title, poster_path, overview, tagline, vote_average, genres } =
    movieInfo;

  return (
    <>
      <section className={css.movieDetailSection}>
        {poster_path && (
          <img
            className={css.movieDetailsImage}
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
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
