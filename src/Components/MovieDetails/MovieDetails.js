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
      .then((data) => console.log(data))
      .catch((error) => console.log("error", error));
    console.log("goodBye");
  };
  render() {
    console.log(this.state.singleMovie);
    return (
      <section className="one-movie">
        <img
          src={this.state.singleMovie.backdrop_path}
          alt={this.state.singleMovie.title}
        />
        <h1>{this.state.singleMovie.title}</h1>
        <p>{this.state.singleMovie.overview}</p>
      </section>
    );
  }
}
export default MovieDetails;
