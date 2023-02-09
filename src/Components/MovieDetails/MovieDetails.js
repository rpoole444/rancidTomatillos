import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailer: [],
      error: "",
      loading: false,
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    Promise.all([
      fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}`
      ).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error with Movie Details");
        }
      }),
      fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}/videos`
      ).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error with movie trailer");
        }
      }),
    ])
      .then(([res1, res2]) => {
        this.setState({
          singleMovie: res1.movie,
          trailer: res2.videos,
          loading: false,
        });
      })
      .catch((error) => console.log(error, "Catch Error!"));
  };

  grabMovieTrailer = () => {
    const trailer = this.state.trailer.find(
      (trailer) => trailer.type === "Trailer"
    );
    console.log(trailer);
    if (!trailer && this.state.trailer.length > 0) {
      return this.state.trailer[0].key;
    } else if (trailer && this.state.trailer.length > 0) {
      return trailer.key;
    }
  };

  render() {
    if (!this.state.singleMovie.title) {
      return <h1>No Video Found</h1>; //make a back button, work on error handeling, spinners for loading (grab package)
    } else {
      //filter the titles for search bar, two copies of the all movies one will be immutable and the other filtered.
      //look out for 2 sets of data search on immutable data, show filtered results(reactable data set),
      //includes is case sensitive make sure that bothe copies are the same case! Throw in toUppercase or Lowercase
      // use trim (no white space errors)
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
                src={`https://www.youtube.com/embed/${this.grabMovieTrailer()}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width={760}
                height={444}
              ></iframe>
            </section>
            <section className="movie-details">
              <section className="details-container">
                <p>{this.state.singleMovie.tagline}</p>
                <p className="movie-overview">
                  {this.state.singleMovie.overview}
                </p>
                <p>{`Release Date: ${this.state.singleMovie.release_date}`}</p>
                <p>{`Film Budget: $${Number(
                  this.state.singleMovie.budget
                ).toLocaleString()}`}</p>
                <p>{`Film Revenue: $${Number(
                  this.state.singleMovie.revenue
                ).toLocaleString()}`}</p>
                <p>{`Film Runtime: ${this.state.singleMovie.runtime} Minutes`}</p>
              </section>
            </section>
          </section>
        </section>
      );
    }
  }
}
export default MovieDetails;
