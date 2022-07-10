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
      isClicked: false,
      selectedMovie:{},
    };
  }

  handleClick = (id) => {
    let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
    this.setState({selectedMovie: selectedMovie})
    console.log("ID", id);
}

    //hides main page
    //brings us to MV page
    
    // if id of what is clicked on matches id on data set, 
    //then, display that id's data in MV
    //based on the id, ids need to match the data 
    //nav bar still available

    //this.setState({isClicked})


    
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
