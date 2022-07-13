import './CardContainer.css';
import React from "react";
import Card from "../Card/Card"
import {Link} from "react-router-dom";


const CardContainer = ({ movies, handleClick }) => {

    const movieData = movies.map(movie => {
        return (
            <Link to={`/${movie.id}`}>
                <Card
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.average_rating}
                    handleClick={handleClick}
                />
            </Link>
        )
    })

    return (
        <div className="wrapper">
            {movieData}
        </div>
    )
}

export default CardContainer;