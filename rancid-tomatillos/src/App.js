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
      isClicked: false,

      selectedMovie: { id: 1, title: "Fake Movie Title", 
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
      release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
      average_rating: 6, genres: ["Drama"], budget: 63000000, 
      revenue: 100853753, runtime: 139, tagline: "It's a movie!"}
      }
    };
  

//    handleClick = (id) => {

//      let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
//      this.setState({selectedMovie: selectedMovie, isClicked: true})
//     console.log("SELMOV", selectedMovie)
//     console.log("ID", id);
//  }



    
  render() {
    return (
      <div>
        <Navbar />
        {/* <CardContainer movies={this.state.allMovies} handleClick={this.handleClick}/> */}
        <MovieView selectedMovie={this.state.selectedMovie}/>
      </div>
    )
  }

}


export default App;
