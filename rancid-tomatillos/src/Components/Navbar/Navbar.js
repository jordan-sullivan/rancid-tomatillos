import './Navbar.css';
import React from "react";

function Navbar( {returnToMain} ) {
    return (
        <header>
            <h1>Rancid Tomatillos</h1>
            <div class="button-container">
            <div class="center">
                <button onClick={returnToMain} class="btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>HOME</span>
                </button>
            </div> 
            </div>  
        </header>
    )
}

export default Navbar;