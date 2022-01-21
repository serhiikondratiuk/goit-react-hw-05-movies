import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from "../../services/moviesApi";
import s from "./HomePage.module.css";
import Placeholder from "../../images/placeholder.png";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending Movies</h1>

      {movies && (
        <ul className={s.gallery}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : Placeholder
                  }
                  alt={movie.title}
                  className={s.img}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
