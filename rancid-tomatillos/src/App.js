import './App.css';
import React, {Component} from "react";
import movieData from "./sample-data/movie-data.js"
import Navbar from "./Components/Navbar/Navbar"
import CardContainer from "./Components/CardContainer/CardContainer"
import MovieView from "./Components/MovieView/MovieView"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: movieData.movies,
      isClicked: false,
      selectedMovie: {}
      }
    };
  

   handleClick = (id) => {
     let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
     this.setState({selectedMovie: selectedMovie, isClicked: true})
      console.log("SELECTED MOVIE", selectedMovie)
      console.log("ID", id);
    }

    
  render() {
  return (
       <div>
          <Navbar />
        {this.state.isClicked ? <MovieView selectedMovie={this.state.selectedMovie} /> :
        <CardContainer movies={this.state.allMovies} handleClick={this.handleClick} />}
        </div>
    )
  }

}


export default App;
