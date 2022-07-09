import './Card.css';
import React, {Component} from "react";

class Card extends Component {
    constructor() {
    super(); 
    this.state = {};   
    }
    
    render() {
        return (
            <div className="card"> here is card 
                <div className="poster">Poster here</div>
                    <div className="cardDescription">
                        <p>Title here</p>
                        <p>Rating</p>
                </div>
            </div>
        )
    }
}

export default Card;