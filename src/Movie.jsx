import { useGlobalContext } from "./contex/MovieState";

import "./Movie.css";

function Movie() {
  const { movie, isloading, addToFavorites,favorites } = useGlobalContext();

  const isMovieInFavorites = (imdbID) => {
    return favorites.some((favorite) => favorite.imdbID === imdbID);
  };

  if (isloading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flickpicks-container">
      <div className="movie-container">
        {movie.map((curMovie) => {
          const { imdbID, Poster, Title, Year, Type } = curMovie;
          const movieTitle = Title.substring(0, 16);

          return (
            <div className="movie-list" key={imdbID}>
              <h3>
                {movieTitle.length > 15 ? `${movieTitle}...` : movieTitle}{" "}
                {Type}, {Year}
              </h3>
              <img src={Poster} alt="Movie Poster" />
              <div
                className="Add-to-Card"
                onClick={() => addToFavorites(curMovie)}
                disabled={isMovieInFavorites(curMovie.imdbID)}
                style={{
                  pointerEvents: isMovieInFavorites(curMovie.imdbID)
                    ? "none"
                    : "auto",
                  opacity: isMovieInFavorites(curMovie.imdbID) ? 0.5 : 1,
                }}
              >
                Add
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
