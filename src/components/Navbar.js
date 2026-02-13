import React from "react";
import {Link} from "react-router-dom";
import "../styles/style.css";

function Navbar(){
  return(
    <div className="navbar">
      <div className="logo">Simar.AI</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
