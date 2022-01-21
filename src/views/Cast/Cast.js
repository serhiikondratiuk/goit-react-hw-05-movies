import s from "./Cast.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Placeholder from "../../images/placeholder.png";

import * as moviesAPI from "../../services/moviesApi";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <>
      <h2 className={s.title}>Cast</h2>
      {cast && (
        <ul className={s.list}>
          {cast.map((actor) => (
            <li className={s.item} key={actor.id}>
              <h3 className={s.name}>{actor.name}</h3>
              <p className={s.character}>{actor.character}</p>
              <img
                className={s.img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : Placeholder
                }
                alt={actor.name}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Cast;
