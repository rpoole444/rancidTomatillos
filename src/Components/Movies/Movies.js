import React from "react";
import "./Movies.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Movies = ({ id, poster_path, title }) => {
  return (
    <NavLink to={`/${id}`} key={id} className="poster-container">
      <section className="movie-poster-container">
        <img
          className="poster-image"
          src={poster_path}
          alt={`${title} movie poster`}
        />
        <section className="movie-title-library">
          <h3>{title}</h3>
        </section>
      </section>
    </NavLink>
  );
};

export default Movies;

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
