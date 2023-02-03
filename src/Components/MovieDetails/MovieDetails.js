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
      .then((data) => console.log(data[1]))
      .catch((error) => console.log("error", error));
    console.log("goodBye");
  };

  render() {
    return (
      <section className="one-movie">
        <h1>{this.state.movie.title}</h1>
        <p>{this.state.movie.overview}</p>
      </section>
    );
  }
}

export default MovieDetails;
