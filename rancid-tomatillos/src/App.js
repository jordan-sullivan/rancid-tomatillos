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
    // console.log("TEST FOR SORT BY RATING")
    // console.log("ALL MOVIES", this.state.allMovies)
    let sorted = this.state.allMovies.sort((a, b) => {
      return b.average_rating - a.average_rating;
  })

  this.setState({allMovies: sorted})

  // console.log("SORTED", sorted)
  // return sorted;
}

  render() {
    return (
      <div>
        <Navbar sortByRating={this.sortByRating}/>
              <Route
                exact path="/" 
                render= {() =>
                  <div className="cardContainerError">
                    {/* <Navbar sortByRating={this.sortByRating}/> */}
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
                  {/* <Navbar sortByRating={this.sortByRating}/> */}
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
