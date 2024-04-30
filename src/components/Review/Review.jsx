import { getMovieReview } from 'api/ListMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      try {
        const data = await getMovieReview(movieId);
        setReviews(data);
      } catch (error) {
        <Notification message={error} />;
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : reviews.length > 0 ? (
        <ul className={css.reviewSection}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3> <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Notification message={`We don't have reviews on this movie`} />
      )}
    </>
  );
};
export default Review;
