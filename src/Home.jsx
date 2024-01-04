import React from "react";
import SearchBar from "./SearchBar";
import Movie from "./Movie";
import Header from "./Header";
const Home = () => {
  return (
    <div className="flickpicks-container">
      <Header />
      <SearchBar />
      <Movie />
    </div>
  );
};

export default Home;
