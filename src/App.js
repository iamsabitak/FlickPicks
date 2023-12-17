import React, {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./Navbar";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import FlickPicks from "./FlickPicks";
import Movie from "./Movie";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/movies" element={<Movie />} />
        <Route exact path="/" element={<FlickPicks />} />
        <Route exact path="/favoritespage" element={<FavoritesPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
