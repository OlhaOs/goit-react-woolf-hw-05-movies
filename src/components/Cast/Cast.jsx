import { getMovieCast } from 'api/ListMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import picturenotFound from './notFound.jpg';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        <Notification message={error} />;
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : cast.length > 0 ? (
        <section className={css.castSection}>
          <ul className={css.castList}>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id} className={css.castListItem}>
                <img
                  className={css.castImg}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `${picturenotFound}`
                  }
                  alt={name}
                />
                <p className={css.castName}>{name}</p>
                <p className={css.castText}>Character - {character}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <Notification message={`We don't have cast on this movie`} />
      )}
    </>
  );
};
export default Cast;
