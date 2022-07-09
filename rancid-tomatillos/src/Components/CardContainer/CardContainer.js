import './CardContainer.css';
import React, {Component} from "react";

class CardContainer extends Component {
    constructor() {
    super(); 
    this.state = {};   
    }
    
    render() {
        return (
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

export default CardContainer;