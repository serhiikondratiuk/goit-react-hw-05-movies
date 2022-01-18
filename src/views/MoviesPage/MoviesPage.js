import s from "./MoviesPage.module.css";

function MoviesPage() {
  return (
    <form className={s.form}>
      <input
        className={s.input}
        name=""
        // value=""
        placeholder="Enter movie name"
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}

export default MoviesPage;
