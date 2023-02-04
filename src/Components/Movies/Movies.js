import React from "react";
import "./Movies.css";
import { NavLink } from "react-router-dom";

const Movies = ({ id, poster_path, title, average_rating }) => {
  return (
    <NavLink to={`/${id}`} key={id} className="poster-container">
      <section className="movie-poster-container">
        <img
          className="poster-image"
          src={poster_path}
          alt={`${title} movie poster`}
        />
        <section className="movie-title">
          <h2>{title}</h2>
          <img className="star-image" src="star.png" alt="star logo" />
          <h2>{`${average_rating.toFixed(0)}`}</h2>
        </section>
      </section>
    </NavLink>
  );
};

export default Movies;
