import React from "react";
import Movies from "../Movies/Movies";
import "./Library.css";

const Library = ({ allMovies }) => {
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
      <div style={{ color: "white" }}>No Movies matched your search</div> // in the inspect tools.
    );
  return <div className="movie-container">{mappedMovies}</div>;
};

export default Library;
