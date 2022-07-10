import './Card.css';
import React from "react";

const Card = ({key, id, poster, rating, title, handleClick}) => {

        return (
            <div className="card" role="button" onClick={handleClick}>
                <div className="poster">
                    <img class="posterImage" src={poster}/>
                </div>
                <div className="cardDescription">
                        <p>Title: {title}</p>
                        <p>Rating: {rating.toFixed(1)}</p>
                    </div>
            </div>
        )
}

export default Card;