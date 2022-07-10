import React from "react";
import "./MovieView.css"

const MovieView = () => {


    
    return(
        <div className="movieViewMain">
            <div className="posterTitleContainer">
            <h2>Fancy Movie Title here</h2>
            <img alt="movie" src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg" />
            </div>
        <div className="statsContainer">
            <p className="releaseDate">releaseDate</p>
            <p className="tagline">tagline</p>
            <p className="rating">rating</p>
            <p className="budget">budget</p>
            <p className="revenue">revenue</p>
            <p className="runtime">runtime</p>
        </div>
        <footer></footer>
    </div>
)
}

export default MovieView