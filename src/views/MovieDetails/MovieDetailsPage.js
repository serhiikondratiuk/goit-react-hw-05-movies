import s from "./MovieDetails.module.css";
import { useState, useEffect } from "react";
import { Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../../services/moviesApi";
import Cast from "../Cast";
import Reviews from "../Reviews";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={s.wrapper}>
          <h2 className={s.title}>{movie.title}</h2>
          <div className={s.flexWrapper}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={s.textWrapper}>
              <p className={s.overview}>
                <span className={s.span}>Overview:</span> {movie.overview}
              </p>
              <p className={s.releaseDate}>
                <span className={s.span}>Release date: </span>
                {movie.release_date}
              </p>
              <p className={s.raiting}>
                <span className={s.span}>Raiting: </span> {movie.vote_average}
              </p>
              <ul className={s.genresList}>
                <span className={s.span}>Genres:</span>
                {movie.genres.map((genre) => (
                  <li className={s.genre} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <div className={s.linkWrapper}>
                <NavLink
                  className={s.link}
                  activeClassName={s.activeLink}
                  to={`${url}/cast`}
                >
                  Cast
                </NavLink>
                <NavLink
                  className={s.link}
                  activeClassName={s.activeLink}
                  to={`${url}/reviews`}
                >
                  Reviews
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
      <Route path={`${url}/cast`}>
        <Cast />
      </Route>
      <Route path={`${url}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}

export default MovieDetailsPage;
