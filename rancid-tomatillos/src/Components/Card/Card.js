import './Card.css';
import React from "react";

const Card = ({key, id, poster, rating, title, handleClick}) => {
    return (
        <div className="card" role="button" onClick={() => handleClick(id)}>
            <div className="poster">
                <img class="posterImage" src={poster}/>
            </div>
            <div className="cardDescription">
                <p className="allTitles">{title}</p>
                <p className="allRatings"> ⭐️ {rating.toFixed(1)} </p>
            </div>
        </div>
    )
}

export default Card;