import s from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from "../../services/moviesApi";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <>
      <h2 className={s.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map((review) => (
            <li className={s.item} key={review.id}>
              <h3 className={s.name}>{review.author}: </h3>
              <p className={s.text}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noReview}>There's no reviews for this film</p>
      )}
    </>
  );
}
export default Reviews;
