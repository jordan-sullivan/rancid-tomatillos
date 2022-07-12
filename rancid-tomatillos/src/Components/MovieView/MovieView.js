import React from "react";
import "./MovieView.css"

const MovieView = ({selectedMovie}) => {


    return(
        <div className="movieViewMain" style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}>
            <div className="posterTitleContainer">
                <div className="floater">
                    <div className="statsContainer">
                        <h2 className="title">{selectedMovie.title}</h2>
                        <p className="tagline">Tagline: ld hsdh kj sf dsfsfsf hkds"{selectedMovie.tagline}</p>
                        <p className="releaseDate">Released: {selectedMovie.release_date}</p>
                        <p className="budget">Budget: $500,000 {selectedMovie.budget}</p>
                        <p className="revenue">Revenue: $50,000 {selectedMovie.revenue}</p>
                        <p className="runtime">Runtime: 50 {selectedMovie.runtime} mins.</p>
                        <p className="rating">{selectedMovie.average_rating.toFixed(1)} ⭐️</p>
                        <div className="genresHolder">
                            <p className="genres">"Drama"</p>
                            <p className="genres">"Comedy"</p>
                            <p className="genres">"Thriller"</p>
                        </div>
                    </div>
                </div>
            </div>
        <footer>
            <p className="overview">Overviewjknjk dhkgkdjgh kdgh kdhg kg kjdfhg dkh gk gwo gko flsl osf sls fkos  
            lsh lg sh fls osf lsfhjksfhkdhsf oishf ks o dlsh os disfh o sfs aefo  lshf </p>
        </footer>
    </div>
)
}

export default MovieView