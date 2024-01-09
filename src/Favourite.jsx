import React from "react";
import { useGlobalContext } from "./contex/MovieState";
import "./Favourite.css";

function Favourite() {
  const { favorites, deletefromFavourite } = useGlobalContext();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-section">
        <h3>No favorites movies yet!</h3>
      </div>
    );
  }

  return (
    <div className="flickpicks-container">
      <h1>Favourite Movies</h1>
      <div className="Favourite-container">
        {favorites.map((favorite, index) => {
          const { imdbID, Poster, Title, Year, Type } = favorite;
          const movieTitle = Title.substring(0, 16);

          return (
            <div className="Favourite-list" key={`${imdbID}-${index}`}>
              <h3>
                {movieTitle.length > 15 ? `${movieTitle}...` : movieTitle}{" "}
                {Type}, {Year}
              </h3>
              <img src={Poster} alt="Movie Poster" />
              <div
                className="Delete-from-list"
                onClick={() => deletefromFavourite(imdbID)}
              >
                Delete
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favourite;
