import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className={css.loading_container}>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
