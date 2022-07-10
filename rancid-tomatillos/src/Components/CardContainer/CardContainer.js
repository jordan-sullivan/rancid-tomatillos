import './CardContainer.css';
import React from "react";
import Card from "../Card/Card"


const CardContainer = ({ movies, handleClick }) => {


    const getSelectedMovie = () => {
        
    }

    const movieData = movies.map(movie => {
        return (
            <Card
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                rating={movie.average_rating}
                handleClick={handleClick}
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