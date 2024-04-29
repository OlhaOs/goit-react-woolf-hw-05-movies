import { getMovieReview } from 'api/ListMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReview = async () => {
      try {
        const data = await getMovieReview(movieId);
        setReviews(data);
      } catch (error) {}
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <section className={css.reviewSection}>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3> <p>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <h2>We don't have reviews on this movie</h2>
        </section>
      )}
    </>
  );
};
export default Review;
