import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from "../../services/moviesApi";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/books/${movie.id}`}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
    </>
  );
}

export default HomePage;
