import { Component } from "react";
import { fetchAllData } from "../Api";
import Header from "../Header/Header";
import Library from "../Library/Library";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: {},
      error: "",
    };
  }

  componentDidMount = () => {
    fetchAllData()
      .then((data) =>
        this.setState(() => {
          return {
            allMovies: data[0].movies,
            singleMovie: data[1].movies,
          };
        })
      )
      .catch((error) => console.log("error", error));
    console.log("hello");
  };

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
