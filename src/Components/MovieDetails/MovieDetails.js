import { Component } from "react";
import { fetchSingleMovie } from "../Api";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailer: [],
      error: "",
    };
  }

  componentDidMount = () => {
    const promise = Promise.all([
      fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}`
      ).then((res) => res.json()),
      fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}/videos`
      ).then((res) => res.json()),
    ]).then(([res1, res2]) => {
      this.setState({ singleMovie: res1.movie, trailer: res2.videos });
    });
    console.log("goodBye");
    return promise;
  };

  findMovieTrailer = () => {
    return this.state.trailer.find((trailer) => trailer.type === "Trailer");
  };

  render() {
    console.log("singleMovie: ", this.state.singleMovie);
    console.log("Trailer: ", this.findMovieTrailer());
    return (
      <section
        className="one-movie"
        style={{
          backgroundImage: `url(${this.state.singleMovie.backdrop_path})`,
        }}
      >
        <NavLink to="/">
          <section className="button-container">
            <button className="home-button">Back To Home</button>
          </section>
        </NavLink>
        <section className="movie-title-container">
          <h1>{this.state.singleMovie.title}</h1>
        </section>
        <section className="middle-container">
          <section className="movie-trailer">
            <iframe
              src={`https://www.youtube.com/embed/${this.findMovieTrailer()}`}
            >
              {/* <source
                src={`https://www.youtube.com/watch?v=${this.findMovieTrailer()}`}
                type="video/mp4"
              ></source>
              <source src={this.findMovieTrailer()} type="video/webm"></source>
              <source src={this.findMovieTrailer()} type="video/ogg"></source>
              This browser does not support HTML video */}
            </iframe>
          </section>
          <section className="movie-details">
            <section className="details-container">
              <p>{this.state.singleMovie.tagline}</p>
              <p className="movie-overview">
                {this.state.singleMovie.overview}
              </p>
              <p>{`Release Date: ${this.state.singleMovie.release_date}`}</p>
              <p>{`Film Budget: $${this.state.singleMovie.budget}`}</p>
              <p>{`Film Revenue: $${this.state.singleMovie.revenue}`}</p>
              <p>{`Film Runtime: ${this.state.singleMovie.runtime} minutes`}</p>
              <p>{this.state.singleMovie.genres}</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
export default MovieDetails;
