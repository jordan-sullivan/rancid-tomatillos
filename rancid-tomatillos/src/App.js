import './App.css';
import React, {Component} from "react";
import movieData from "./sample-data/movie-data.js"
import Navbar from "./Components/Navbar/Navbar"
import CardContainer from "./Components/CardContainer/CardContainer"
//import MovieView from "./Components/MovieView/MovieView"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: movieData.movies,
    };
  }

  handleClick() {

    console.log("handleClick function in APP");
    //hides main page
    //brings us to MV page
    //based on the id, ids need to match the data 
    //nav bar still available
  }

    
  render() {
    return (
      <div>
        <Navbar />
        <CardContainer movies={this.state.allMovies} handleClick={this.handleClick}/>
        {/* <MovieView /> */}
      </div>
    )
  }
}



export default App;
