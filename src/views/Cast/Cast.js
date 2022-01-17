import s from "./Cast.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from "../../services/moviesApi";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(setCast);
  }, []);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img src={actor.profile_path} alt={actor.name} />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </>
  );
}
export default Cast;
