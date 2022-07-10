import './Navbar.css';
import React from "react";

function Navbar( {returnToMain} ) {
    return (
        <header style={{border: "5px solid blue"}}>
            <h1>Rancid Tomatillos</h1>
            <button onClick={returnToMain}> Home </button>
        </header>
    )
}

export default Navbar;