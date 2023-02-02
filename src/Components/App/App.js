import { Component } from "react";
import Header from "../Header/Header";
import Library from "../Library/Library";
import Movie from "../Movies/Movies";
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
        {/* <Library /> */}
      </main>
    );
  }
}

export default App;
