import { Component } from "react";
import Header from "../Header/Header";
import Library from "../Library/Library";
import Movies from "../Movies/Movies";
import movieData from "../movieData/movieData";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData,
    };
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Library allMovies={this.state.allMovies} />
      </main>
    );
  }
}

export default App;
