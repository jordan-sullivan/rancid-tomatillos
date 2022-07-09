import './App.css';
import React, {Component} from "react";
import movieData from "./sample-data/movie-data.js"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: [movieData],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <MovieContainer />
      </div>
    )
  }
}


export default App;
