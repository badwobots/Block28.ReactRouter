import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <Link to="Red">Red</Link>
            <Link to="Blue">Blue</Link>
            <Link to="Home">HOME</Link>
        </div>
    )
}

export default Navbar;