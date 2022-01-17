import s from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from "../../services/moviesApi";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieReviews(movieId).then(setReviews(movieId));
  }, [movieId]);
  return <>Hello</>;
}
export default Reviews;
