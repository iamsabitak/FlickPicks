import Home from "./Home";
import Favourite from "./Favourite";
import MovieState from "./contex/MovieState";

import NavBar from "./Navbar";

import React, {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Movie from "./Movie";

function App() {
  return (
    <MovieState>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movie />} />
          <Route exact path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </MovieState>
  );
}

export default App;
