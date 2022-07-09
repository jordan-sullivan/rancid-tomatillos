import './Card.css';
import React, {Component} from "react";

class Card extends Component {
    constructor(props) {
    super(props); 
    this.state = {};   
    }
    
    render() {
        return (
            <div className="card"> here is card 
                <div className="poster"></div>
                   <div className="cardDescription">
                        <p>Title</p>
                        <p>rating</p>
                    </div>
            </div>
        )
    }
}

export default Card;