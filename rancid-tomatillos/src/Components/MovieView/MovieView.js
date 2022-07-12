import React from "react";
import "./MovieView.css"

const MovieView = ({selectedMovie}) => {


    return(
        <div className="movieViewMain" style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}>
            <div className="posterTitleContainer">
                <h2 className="title">{selectedMovie.title}</h2>
        <div className="statsContainer">
            <p className="releaseDate">{selectedMovie.release_date}</p>
            <p className="tagline">{selectedMovie.tagline}</p>
            <p className="rating">{selectedMovie.average_rating} ⭐️</p>
            <p className="budget">$ {selectedMovie.budget}</p>
            <p className="revenue">$ {selectedMovie.revenue}</p>
            <p className="runtime">{selectedMovie.runtime} mins.</p>
            </div>
        </div>
        <footer>
            <p className="overview">Overviewjknjk dhkgkdjgh kdgh kdhg kg kjdfhg dkh gk gwo gko flsl osf sls fkos  
            lsh lg sh fls osf lsfhjksfhkdhsf oishf ks o dlsh os disfh o sfs aefo  lshf </p>
            <div className="genresHolder">
                <p className="genres">"Drama"</p>
                <p className="genres">"Comedy"</p>
                <p className="genres">"Thriller"</p>
            </div>
        </footer>
    </div>
)
}

export default MovieView