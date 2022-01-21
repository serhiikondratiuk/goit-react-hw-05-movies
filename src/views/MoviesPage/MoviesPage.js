import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as moviesAPI from "../../services/moviesApi";
import Form from "../../components/Form";
import LoadMoreButton from "../../components/LoadMoreButton";
import NewLoader from "../../components/Loader";
import Placeholder from "../../images/placeholder.png";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (query) {
      setStatus("pending");
      fetchMovies();
    }
  }, [query]);

  const fetchMovies = () => {
    moviesAPI
      .fetchMovieByName(query, page)
      .then(({ results }) => {
        if (results.length === 0) {
          toast.warning(`There is no ${query} found`);
        }
        if (results.length > 0) {
          toast.success(`New ${query} found!`);
        }
        setMovies([...movies, ...results]);
        setStatus("resolved");
        setPage(page + 1);
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      })
      .finally(() => {
        handleLoadMoreButton();
      });
  };

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setMovies([]);
  };

  const handleLoadMoreButton = () => {
    if (page > 1) {
      const options = {
        top: null,
        behavior: "smooth",
      };
      options.top =
        window.pageYOffset + document.documentElement.clientHeight - 80;
      setTimeout(() => {
        window.scrollTo(options);
      }, 1000);
    }
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit} />

      {status === "pending" && <NewLoader />}
      {status === "rejected" && toast.error(`${error.message}`)}
      <>
        {status === "resolved" && movies && (
          <div className={s.wrapper}>
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
            <div className={s.btnWrapper}>
              {movies.length >= 20 && <LoadMoreButton onClick={fetchMovies} />}
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default MoviesPage;
