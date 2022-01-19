import s from "./From.module.css";
import { useState } from "react";
// import { toast } from "react-toastify";

function Form({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      //   return toast.warning("Enter something new...");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        onChange={handleQueryChange}
        className={s.input}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name"
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}

export default Form;
