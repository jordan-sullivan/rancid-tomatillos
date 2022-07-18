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
      selectedMovie: null,
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
      })
      .catch(() =>
      this.setState({error: "There was an error loading your films. Please try again!"}))
    }
    

  handleClick = (id) => {
    let selectedMovie = this.state.allMovies.find(movie => movie.id === id)
    this.setState({selectedMovie: selectedMovie})
      console.log("SELECTED MOVIE", selectedMovie.average_rating)
    }

  sortByRating= () => {
    let sorted = this.state.allMovies.sort((a, b) => {
      if (this.state.allMovies[0].average_rating < 7) {
      return b.average_rating - a.average_rating;
  } else {
    return a.average_rating - b.average_rating;
  }
  })

  this.setState({allMovies: sorted})
}

  render() {
    return (
      <div className="app">
        <Navbar sortByRating={this.sortByRating}/>
              <Route
                exact path="/" 
                render= {() =>
                  <div className="cardContainerError">
                    <div style={{display: this.state.error ? "block" : "none"}}> {this.state.error} </div> 
                    <CardContainer movies={this.state.allMovies} handleClick={this.handleClick} />
                  </div>
                }
              />
              
            <Route
              exact path="/:id" 
              render={({match}) => {
                return(
                <div>
                  <div style={{display: this.state.error ? "block" : "none"}}> </div>  
                  <MovieView id={match.params.id} rating={this.state.rating}/>
                </div>
                ) 
              }}
            />
          </div>
        )
      }
}

export default App;
