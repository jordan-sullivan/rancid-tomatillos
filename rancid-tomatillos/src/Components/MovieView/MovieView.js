import React from "react";
import "./MovieView.css"
//selectedMovie
const MovieView = ({selectedMovie}) => {

    

    return(
        <div className="movieViewMain">
            <div className="posterTitleContainer">
                <h2>{selectedMovie.title}</h2>
                <img className="backdrop" alt="movie" src={selectedMovie.backdrop_path} />
            </div>
        <div className="statsContainer">
                <p className="releaseDate">{selectedMovie.release_date}</p>
            <p className="tagline">{selectedMovie.tagline}</p>
            <p className="rating">{selectedMovie.average_rating} ⭐️</p>
            <p className="budget">$ {selectedMovie.budget}</p>
                <p className="revenue">$ {selectedMovie.revenue}</p>
                <p className="runtime">{selectedMovie.runtime} mins.</p>
        </div>
        <footer></footer>
    </div>
)
}

export default MovieView