import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flickpicks">
        <h2>FlickPicks</h2>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/favoritespage" className="nav-link">
            Favorite
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
