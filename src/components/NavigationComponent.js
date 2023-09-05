import React from "react";
import {  Link } from "react-router-dom";
function NavigationComponent(){
    return(
        <div className="navBar">
            <ul>
            <Link to="/"><h1>Gopal</h1></Link>
            </ul>
            <ul>
            <Link to="/about">About</Link>
            <Link to="/project">My Project</Link>
            <Link to="/contact">Contact</Link>
            </ul>
        </div>
    )
}
export default NavigationComponent