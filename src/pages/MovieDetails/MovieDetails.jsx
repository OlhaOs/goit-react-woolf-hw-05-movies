import { getMovieDetails } from 'api/ListMovies';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
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
      <section>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={tagline}
          />
        )}
        <h2>{title}</h2>
        <p>vote average: {vote_average}</p>
        <p>{overview}</p>

        {genres && genres.length > 0 && (
          <div>
            {genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre.name}
              </span>
            ))}
          </div>
        )}
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};
