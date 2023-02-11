import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";
class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailer: [],
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
    console.log(this.state.trailer);
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
      return (
        <section
          style={{
            height: "100vh",
            width: "100vw",
            fontsSize: "40px",
            color: "snow",
            backgroundColor: "black",
          }}
        >
          <h1>No Video Found</h1>
        </section>
      );
    } else if (this.state.loading) {
      return (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            fontsSize: "40px",
            color: "snow",
            backgroundColor: "black",
          }}
        >
          Loading
        </div>
      );
    } else {
      const {
        title,
        tagline,
        overview,
        release_date,
        runtime,
        backdrop_path,
        budget,
        revenue,
      } = this.state.singleMovie;
      const trailerURL = this.grabMovieTrailer();
      return (
        <section
          className="one-movie"
          style={{
            backgroundImage: `linear-gradient(to bottom, #0000, #232325), url(${backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <NavLink to="/">
            <section className="button-container">
              <button className="home-button">Back To Home</button>
            </section>
          </NavLink>
          <section className="movie-title-container">
            <h1 className="movie-title">{title}</h1>
          </section>
          <section className="middle-container">
            <section className="movie-trailer">
              {trailerURL ? (
                <iframe
                  src={`https://www.youtube.com/embed/${trailerURL}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width="80%"
                  height="80%"
                  frameBorder="0"
                ></iframe>
              ) : (
                <div>No trailer available</div>
              )}
            </section>
          </section>
          <section className="movie-details">
            <section className="details-container">
              <section className="details-box">
                <p>{`Film Runtime: ${runtime} Minutes`}</p>
                <p>{`Release Date: ${release_date}`}</p>
                <p>{`Film Budget: $${Number(budget).toLocaleString()}`}</p>
                <p>{`Film Revenue: $${Number(revenue).toLocaleString()}`}</p>
              </section>
            </section>
            <section className="movie-overview">
              <p className="overview">{overview}</p>
            </section>
          </section>
        </section>
      );
    }
  }
}
export default MovieDetails;
