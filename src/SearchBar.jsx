import React from "react";

import "./Home.css";

import { useGlobalContext } from "./contex/MovieState";

function SearchBar() {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <div className="searchlocation">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="search-bar"
      >
        <div>
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* <button className="search-button">View Full Site</button> */}
      </form>
      <div>
        <p>{error.show && error.msg}</p>
      </div>
    </div>
  );
}

export default SearchBar;
