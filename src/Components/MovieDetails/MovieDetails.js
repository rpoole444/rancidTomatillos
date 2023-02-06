import { Component } from "react";
import { fetchSingleMovie } from "../Api";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      error: "",
    };
  }
  componentDidMount = () => {
    fetchSingleMovie(`movies/${this.props.movieID}`)
      .then((data) => this.setState({ singleMovie: data.movie }))
      .catch((error) => console.log("error", error));
    console.log("goodBye");
  };
  render() {
    console.log(this.state.singleMovie);
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
            <img
              className="single-movie-poster"
              src={this.state.singleMovie.poster_path}
              alt={`${this.state.singleMovie.title} - movie trailer`}
            />
          </section>
          <section className="movie-details">
            <section className="details-container">
              <p>{this.state.singleMovie.tagline}</p>
              <p className="movie-overview">
                {this.state.singleMovie.overview}
              </p>
              <p>{`Release Date: ${this.state.singleMovie.release_date}`}</p>
              <p>{`Film Budget: $${this.state.singleMovie.budget} million`}</p>
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
