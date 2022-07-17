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
      rating:0,
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
    this.setState({selectedMovie: selectedMovie, rating: selectedMovie.average_rating})
      console.log("SELECTED MOVIE", selectedMovie.average_genres)
    }

  //   getGenres() {
  //     let noDups = []
  //   this.state.allMovies.forEach((movie => {
  //     movie.genres.forEach((gen => {
  //       if (!gen) {
  //         noDups.push(gen)
  //       }
  //     }))
  //   }))
  //   console.log("NO DUPPPPSS", noDups)
  //   return noDups
  // }
  
  render() {
    return (
      <div>
              <Navbar getGenres={this.getGenres}/>
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
                  <div style={{display: this.state.error ? "block" : "none"}}> YO </div>  
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
