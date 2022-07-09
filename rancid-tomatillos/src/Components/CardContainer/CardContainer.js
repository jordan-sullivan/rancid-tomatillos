import './CardContainer.css';
import React, {Component} from "react";
import Card from "../Card/Card"

class CardContainer extends Component {
    constructor() {
    super(); 
    this.state = {};   
    }
    
    render() {
        return (
            <div>
                <h1>hi</h1>
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