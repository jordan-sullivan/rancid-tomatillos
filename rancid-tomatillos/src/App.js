import './App.css';
import React, {Component} from "react";
import movieData from "./sample-data/movie-data.js"
import Navbar from "./Components/Navbar/Navbar"
// import CardContainer from "./Components/CardContainer/CardContainer"
import MovieView from "./Components/MovieView/MovieView"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: movieData.movies,
    };
  }


    
  render() {
    return (
      <div>
        <Navbar />
        {/* <CardContainer movies={this.state.allMovies}/> */}
        <MovieView />
      </div>
    )
  }
}



export default App;
