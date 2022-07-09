import './Card.css';
import React, {Component} from "react";

class Card extends Component {
    constructor() {
    super(); 
    this.state = {};   
    }
    
    render() {
        return (
            <div style={{border: "1px solid green"}}> here is card </div>
        )
    }
}

export default Card;