import './CardContainer.css';
import React from "react";
import Card from "../Card/Card"


const CardContainer = ({ movies }) => {

    const movieData = movies.map(movie => {
        return (
            <Card
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                rating={movie.average_rating}
            />
        )
    })

    return (
        
        <div className="wrapper">
            {movieData}
        </div>
    )
}


export default CardContainer;