import './App.css';
import React, {Component} from "react";
import Navbar from "./Components/Navbar/Navbar"
import CardContainer from "./Components/CardContainer/CardContainer"
import MovieView from "./Components/MovieView/MovieView"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: [],
      isClicked: false,
      selectedMovie: {},
      error: "",
      loading: false,
      }
    };
  
  componentDidMount() {
    this.setState({
      loading: true,
    })
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => {
      console.log("Data", data)
      this.setState({allMovies: data.movies, loading: false})
    .catch(() =>
      this.setState({error: "There was an error loading your films. Please try again!"}) 
      )
    })
  }

  handleClick = (id) => {
    let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
    this.setState({selectedMovie: selectedMovie, isClicked: true})
      console.log("SELECTED MOVIE", selectedMovie)
      console.log("ID", id);
    }

  returnToMain = () => {
    console.log("RTM firing")
    this.setState({isClicked:false, selectedMovie: {}})
  }

    
  render() {
  return (
      <div>
        <Navbar returnToMain={this.returnToMain}/>
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.allMovies.length && !this.state.error && <h3>Loading...</h3>}
        {this.state.isClicked ? <MovieView selectedMovie={this.state.selectedMovie} /> :
        <CardContainer movies={this.state.allMovies} handleClick={this.handleClick} />}
      </div>
    )
  }

}


export default App;
