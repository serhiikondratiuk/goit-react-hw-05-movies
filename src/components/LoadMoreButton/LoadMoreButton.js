import PropTypes from "prop-types";
import s from "./LoadMoreButton.module.css";

function LoadMoreButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={s.button} type="button">
        Load more
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
