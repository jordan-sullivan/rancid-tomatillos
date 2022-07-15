import React, {Component} from "react";
import "./MovieView.css"


class MovieView extends Component{
    constructor(props) {
        super(props);
        this.state= {
            selectedMovieInfo: {},
        };
    }

    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                selectedMovieInfo: data.movie,
            })
        })
    }
    
    render() {
        return(
            <div className="movieViewMain" src={this.state.selectedMovieInfo.backdrop_path} 
                                        style={{ backgroundImage: `url(${this.state.selectedMovieInfo.backdrop_path})` }}>
                <div className="posterTitleContainer">
                    <div className="floater">
                        <div className="statsContainer">
                            <h2 className="title">{this.state.selectedMovieInfo.title}</h2>
                            <p className="tagline">Tagline: {this.state.selectedMovieInfo.tagline}</p>
                            <p className="releaseDate">Released: {this.state.selectedMovieInfo.release_date}</p>
                            <p className="budget">Budget: {this.state.selectedMovieInfo.budget}</p>
                            <p className="revenue">Revenue: {this.state.selectedMovieInfo.revenue}</p>
                            <p className="runtime">Runtime: {this.state.selectedMovieInfo.runtime} mins.</p>
                            <p className="rating">{this.state.selectedMovieInfo.average_rating} ⭐️</p>
                            <div className="genresHolder">
                                <p className="genres">{this.state.selectedMovieInfo.genres}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <p className="overview">{this.state.selectedMovieInfo.overview}</p>
            </footer>
        </div>
        )
    }
} 

export default MovieView
