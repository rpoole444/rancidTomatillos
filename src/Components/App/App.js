import { Component } from "react";
import { fetchAllMovies } from "../Api";
import Header from "../Header/Header";
import Library from "../Library/Library";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies: [],
      loading: false,
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    fetchAllMovies()
      .then((data) =>
        this.setState({
          allMovies: data.movies,
          filteredMovies: data.movies,
          loading: false,
        })
      )
      .catch((error) => console.log(error, "Error setting library"));
  };

  updateMovieFilter = (q) => {
    if (q.length > 0) {
      this.setState({
        filteredMovies: this.state.allMovies.filter((movie) =>
          movie.title.toUpperCase().includes(q.toUpperCase())
        ),
      });
    } else {
      this.setState({ filteredMovies: this.state.allMovies });
    }
  };

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Header onUpdateSearch={this.updateMovieFilter} />
                  <Library allMovies={this.state.filteredMovies} />
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
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </main>
    );
  }
}
export default App;
