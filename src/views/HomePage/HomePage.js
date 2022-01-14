import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from "../../services/moviesApi";
import s from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending Movies</h1>
      <ul className={s.gallery}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={s.img}
                />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
