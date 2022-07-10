import './Card.css';
import React from "react";

const Card = ({key, poster, rating, title}) => {

        return (
            <div className="card">
                <div className="poster"><img class="posterImage" src={poster}/></div>
                   <div className="cardDescription">
                        <p>Title: {title}</p>
                        <p>Rating: {rating.toFixed(1)}</p>
                    </div>
            </div>
        )
}

export default Card;