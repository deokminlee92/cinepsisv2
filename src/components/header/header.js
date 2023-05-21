import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-header">
      <div className="Logo">
        {" "}
        <Link to="/" className="LinkToHome">
          Logo
        </Link>
      </div>
      <nav className="liBox-header">
        <ul>
          <li>
            <Link to="/search" className="LinkToSearch">
              Search
            </Link>
          </li>
          <li>
            <Link to="/films" className="LinkToFilms">
              Films
            </Link>
          </li>
          <li>
            <Link to="/favoris" className="LinkToFavoris">
              Favoris
            </Link>
          </li>
          <li>
            <Link to="/about" className="LinkToAbout">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
