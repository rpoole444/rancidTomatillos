import React from "react";
import Movies from "../Movies/Movies";
import "./Library.css";

const Library = ({ allMovies }) => {
  const mappedMovies = allMovies.map((movie) => {
    return (
      <Movies
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
      />
    );
  });

  return <div className="movie-container">{mappedMovies}</div>;
};

export default Library;
