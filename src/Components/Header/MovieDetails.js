import { Component } from "react";
import { fetchAllData } from "../Api";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      error: "",
    };
  }

  componentDidMount = () => {
    fetchAllData()
      .then((data) => this.setState({ movie: data[1] }))
      .catch((error) => console.log("error", error));
    console.log("goodBye");
  };

  render() {
    return (
      <section className="one-movie">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </section>
    );
  }
}

export default MovieDetails;
