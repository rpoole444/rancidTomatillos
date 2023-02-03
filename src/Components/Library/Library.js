import React from "react";
import Movies from "../Movies/Movies";
import "./Library.css";

const Library = ({ allMovies }) => {
  console.log(allMovies);
  const filteredMovies = allMovies.map((movie) => {
    return (
      <Movies
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
      />
    );
  });
  return <div className="movie-container">{filteredMovies}</div>;
};

export default Library;
