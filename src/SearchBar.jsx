import React from "react";
import "./FlickPicks.css";
function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
      />
      <button className="search-button">View Full Site</button>
    </div>
  );
}

export default SearchBar;
