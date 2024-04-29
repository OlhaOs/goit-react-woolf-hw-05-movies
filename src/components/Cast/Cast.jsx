import { getMovieCast } from 'api/ListMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import picturenotFound from './notFound.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {}
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <section className={css.castSection}>
          <ul className={css.castList}>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id} className={css.castListItem}>
                {profile_path ? (
                  <img
                    className={css.castImg}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    className={css.castImgPlaceholder}
                    src={`${picturenotFound}`}
                    alt={name}
                  />
                )}
                <p className={css.castName}>{name}</p>
                <p className={css.castText}>Character - {character}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
export default Cast;
