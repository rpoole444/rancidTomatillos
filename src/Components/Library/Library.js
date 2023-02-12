import React from "react";
import Movies from "../Movies/Movies";
import "./Library.css";
import PropTypes from 'prop-types'

const Library = ({ allMovies }) => {
  console.log(allMovies);
  const mappedMovies =
    allMovies.length > 0 ? (
      allMovies.map((movie) => {
        return (
          <Movies
            id={movie.id}
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            average_rating={movie.average_rating}
          />
        );
      })
    ) : (
      <div className="no-movies">No Movies Matched Your Search</div> // in the inspect tools.
    );
  return <div className="movie-container">{mappedMovies}</div>;
};

export default Library;

Library.propTypes = {
  allMovies: PropTypes.array
}