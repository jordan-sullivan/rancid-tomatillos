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
                <div className="poster"><img class="posterImage" src={this.props.poster}/></div>
                   <div className="cardDescription">
                        <p>Title: {this.props.title}</p>
                        <p>Rating: {this.props.rating.toFixed(1)}</p>
                    </div>
            </div>
        )
    }
}

export default Card;