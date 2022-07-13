import './App.css';
import React, {Component} from "react";
import Navbar from "./Components/Navbar/Navbar"
import CardContainer from "./Components/CardContainer/CardContainer"
import MovieView from "./Components/MovieView/MovieView"
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super();
    this.state= {
      allMovies: [],
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
        this.setState({allMovies: data.movies, loading: false})
      .catch(() =>
        this.setState({error: "There was an error loading your films. Please try again!"}) 
        )
    })
  }

  handleClick = (id) => {
    let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
    this.setState({selectedMovie: selectedMovie})
      console.log("SELECTED MOVIE", selectedMovie.id)
    }

  returnToMain = () => {
    console.log("RTM firing")
    this.setState({selectedMovie: {}})
  }

  
  render() {
  return (
      <div>
        <Navbar returnToMain={this.returnToMain}/>
        <Route
          exact path="/" 
          render= {() => 
          <CardContainer movies={this.state.allMovies} handleClick={this.handleClick} />}
        />
        <Route
          exact path="/:id"      
          render={({match}) => {   
            return <MovieView id={match.params.id}/>
          }}
        />
      </div>
    )
  }
}


export default App;
