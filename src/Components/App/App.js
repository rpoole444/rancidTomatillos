import { Component } from "react";
import { fetchAllMovies } from "../Api";
import Header from "../Header/Header";
import Library from "../Library/Library";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: false,
      loading: false,
    };
  }
  componentDidMount = () => {
    this.setState({loading: true})
    fetchAllMovies()
      .then((data) => this.setState({ allMovies: data.movies, loading: false }))
      .catch((error) => this.getError());
  };

  getError = () => {
    this.setState({error: true})
  }
  
  render() {
    return (
      <main className="App">
        {this.state.error && 
         <section className="error-box">
          <h1 className="error-header">UH OH! Something went wrong. Please try again.</h1>
          <img className="error-image" src="robot.jpg" alt="robot"></img>
       </section> 
        }
        <Switch>
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
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
      </main>
    );
  }
}
export default App;
