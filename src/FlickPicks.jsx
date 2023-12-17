import React from "react";
import "./FlickPicks.css";

import FlickPicksContent from "./FlickPicksContent";
import SearchBar from "./SearchBar";

const FlickPicks = () => {
  return (
    <div className="flickpicks-container">
      <h1>FlickPicks</h1>
      <SearchBar />
      <FlickPicksContent />
    </div>
  );
};

export default FlickPicks;
