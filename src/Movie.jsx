import React from "react";
import "./Movie.css";

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi" },
  { id: 2, title: "The Shawshank Redemption", genre: "Drama" },
  { id: 3, title: "The Dark Knight", genre: "Action" },
  { id: 4, title: "Pulp Fiction", genre: "Crime" },
  { id: 5, title: "Forrest Gump", genre: "Drama" },
  { id: 6, title: "The Matrix", genre: "Sci-Fi" },
  { id: 7, title: "Interstellar", genre: "Sci-Fi" },
  { id: 8, title: "Fight Club", genre: "Drama" },
  { id: 9, title: "The Godfather", genre: "Crime" },
  { id: 10, title: "Goodfellas", genre: "Crime" },
  // Add more movies here
];

const Movie = () => {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
