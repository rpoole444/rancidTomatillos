import { Component } from "react";
import { fetchSingleMovie } from "../Api";
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
          backgroundSize: "cover",
        }}
      >
        <section className="movie-trailer">
          <section className="movie-title">
            <h1>{this.state.singleMovie.title}</h1>
          </section>
          <img
            className="single-movie-poster"
            src={this.state.singleMovie.poster_path}
            alt={`${this.state.singleMovie.title} - movie trailer`}
          />
        </section>
        <section className="movie-details">
          <p>{this.state.singleMovie.tagline}</p>
          <p>{this.state.singleMovie.overview}</p>
          <p>{`Release Date: ${this.state.singleMovie.release_date}`}</p>
          <p>{`Film Budget: $${this.state.singleMovie.budget}`}</p>
          <p>{`Film Revenue: $${this.state.singleMovie.revenue}`}</p>
          <p>{`Film Runtime: ${this.state.singleMovie.runtime} minutes`}</p>
          <p>{this.state.singleMovie.genres}</p>
        </section>
      </section>
    );
  }
}
export default MovieDetails;
