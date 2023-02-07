import { Component } from "react";
import { fetchAllMovies } from "../Api";
import Header from "../Header/Header";
import Library from "../Library/Library";
import { Route } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: "",
    };
  }
  componentDidMount = () => {
    fetchAllMovies()
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch((error) => console.log("error", error));
    console.log("hello");
  };
  render() {
    return (
      <main className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Header />
                <Library allMovies={this.state.allMovies} />
              </div>
            );
          }}
        ></Route>
        <Route
          exact
          path="/:movieId"
          render={({ match }) => {
            return <MovieDetails movieID={match.params.movieId} />;
          }}
        ></Route>
      </main>
    );
  }
}
export default App;
