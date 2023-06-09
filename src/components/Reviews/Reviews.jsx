import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from '../services/getMovies';
import css from './Reviews.module.css'
import PropTypes from 'prop-types';


const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
    .then(data => setReviews(data))
    .catch(err => console.log(err));
  }, [movieId]);

  if (reviews.length === 0) { 
    return (
      <p>We don't have any reviews for this movie.</p>
    )
  }

  return (
    <div className={css.reviewsWrapp}>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li className={css.reviewsItem} key={review.id}>
            <p className={css.reviewsTitle}>{review.author}</p>
            <p className={css.reviewsTxt}>{review.content}</p>
            <p className={css.reviewsTitle}>{review.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired
}

export default Reviews;