import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div id="perfooter">
            <Link to="Red">Red</Link>
            <Link to="Blue">Blue</Link>
            <Link to="Home">HOME</Link>
        </div>
    )
}

export default Footer;